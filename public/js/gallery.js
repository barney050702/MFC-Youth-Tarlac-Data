(function() {
  const btnUpload = document.getElementById('btn-upload-photo');
  const btnCancelUpload = document.getElementById('btn-cancel-upload');
  const uploadFormContainer = document.getElementById('gallery-upload-form');
  const formUpload = document.getElementById('form-upload-photo');
  const photoInput = document.getElementById('gallery-photo-input');
  const activitySelect = document.getElementById('gallery-activity-select');
  const filterSelect = document.getElementById('gallery-filter-select');
  const galleryGrid = document.getElementById('gallery-grid');
  const progressContainer = document.getElementById('upload-progress-container');
  const progressBar = document.getElementById('upload-progress-bar');
  const progressText = document.getElementById('upload-progress-text');
  const btnSubmit = document.getElementById('btn-submit-photo-upload');
  const dropzone = document.getElementById('upload-dropzone');
  const dropzonePreview = document.getElementById('dropzone-preview');
  const dropzonePreviewImg = document.getElementById('dropzone-preview-img');
  const dropzonePreviewClear = document.getElementById('dropzone-preview-clear');
  const emptyState = document.getElementById('gallery-empty-state');
  const loadingState = document.getElementById('gallery-loading');

  let loadedPhotos = [];
  let currentLightboxIndex = 0;
  let filteredPhotos = [];

  // ========== DRAG & DROP ==========
  if (dropzone) {
    dropzone.addEventListener('click', (e) => {
      if (e.target.closest('.dropzone-preview-clear')) return;
      photoInput?.click();
    });

    ['dragenter', 'dragover'].forEach(evt => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(evt => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('drag-over');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0 && files[0].type.startsWith('image/')) {
        // Set the file input
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);
        photoInput.files = dataTransfer.files;
        showPreview(files[0]);
      }
    });
  }

  // File input change → show preview
  photoInput?.addEventListener('change', () => {
    if (photoInput.files.length > 0) {
      showPreview(photoInput.files[0]);
    }
  });

  function showPreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (dropzonePreviewImg) dropzonePreviewImg.src = e.target.result;
      if (dropzonePreview) dropzonePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }

  // Clear preview
  dropzonePreviewClear?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropzonePreview) dropzonePreview.classList.add('hidden');
    if (dropzonePreviewImg) dropzonePreviewImg.src = '';
    if (photoInput) photoInput.value = '';
  });

  // ========== TOGGLE UPLOAD FORM ==========
  btnUpload?.addEventListener('click', () => {
    if (typeof isAdmin !== 'undefined' && !isAdmin) {
      if (typeof showToast === 'function') showToast('Admin access required to upload photos.', 'error');
      return;
    }
    uploadFormContainer?.classList.toggle('hidden');
  });

  btnCancelUpload?.addEventListener('click', () => {
    uploadFormContainer?.classList.add('hidden');
    formUpload?.reset();
    if (dropzonePreview) dropzonePreview.classList.add('hidden');
    if (dropzonePreviewImg) dropzonePreviewImg.src = '';
  });

  // ========== VIEW TOGGLE ==========
  document.querySelectorAll('.gallery-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      if (galleryGrid) {
        if (view === 'masonry') {
          galleryGrid.classList.add('masonry-view');
        } else {
          galleryGrid.classList.remove('masonry-view');
        }
      }
    });
  });

  // ========== FILTER ==========
  filterSelect?.addEventListener('change', () => {
    renderPhotoGrid(filterSelect.value);
  });

  // ========== RENDER GALLERY (entry point) ==========
  window.renderGallery = function() {
    populateActivityDropdowns();
    fetchPhotos();
  };

  function populateActivityDropdowns() {
    if (typeof dbActivities === 'undefined') return;
    const activities = dbActivities.getAll().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (activitySelect) {
      activitySelect.innerHTML = '<option value="">-- Select an Activity --</option>';
      activities.forEach(act => {
        const option = document.createElement('option');
        option.value = act.id;
        option.textContent = `${act.date} - ${act.title || act.activity}`;
        activitySelect.appendChild(option);
      });
    }

    if (filterSelect) {
      filterSelect.innerHTML = '<option value="all">All Activities</option>';
      activities.forEach(act => {
        const option = document.createElement('option');
        option.value = act.id;
        option.textContent = `${act.date} - ${act.title || act.activity}`;
        filterSelect.appendChild(option);
      });
    }
  }

  // ========== FETCH PHOTOS ==========
  function fetchPhotos() {
    if (typeof firebase === 'undefined' || typeof db === 'undefined') {
      showEmptyState('Firebase is not connected.');
      return;
    }

    showLoading(true);

    db.collection('activity_photos').orderBy('timestamp', 'desc').get()
      .then((snapshot) => {
        loadedPhotos = [];
        snapshot.forEach(doc => {
          loadedPhotos.push({ id: doc.id, ...doc.data() });
        });
        showLoading(false);
        updateStats();
        renderPhotoGrid(filterSelect?.value || 'all');
      })
      .catch((error) => {
        console.error("Error fetching photos: ", error);
        showLoading(false);
        showEmptyState('Error loading photos.');
      });
  }

  // ========== UPDATE STATS ==========
  function updateStats() {
    const totalEl = document.getElementById('gallery-stat-total');
    const activitiesEl = document.getElementById('gallery-stat-activities');
    const latestEl = document.getElementById('gallery-stat-latest');
    const countTextEl = document.getElementById('gallery-count-text');

    if (totalEl) totalEl.textContent = loadedPhotos.length;
    if (countTextEl) countTextEl.textContent = `${loadedPhotos.length} Photo${loadedPhotos.length !== 1 ? 's' : ''}`;

    const uniqueActivities = new Set(loadedPhotos.map(p => p.activityId));
    if (activitiesEl) activitiesEl.textContent = uniqueActivities.size;

    if (latestEl && loadedPhotos.length > 0) {
      latestEl.textContent = new Date(loadedPhotos[0].timestamp).toLocaleDateString();
    }
  }

  // ========== RENDER PHOTO GRID ==========
  function renderPhotoGrid(filterActivityId) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    filteredPhotos = filterActivityId === 'all'
      ? [...loadedPhotos]
      : loadedPhotos.filter(p => String(p.activityId) === String(filterActivityId));

    if (filteredPhotos.length === 0) {
      showEmptyState();
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    filteredPhotos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-img-card';
      card.style.animationDelay = `${index * 0.05}s`;
      card.onclick = () => openLightbox(index);

      const dateStr = photo.timestamp ? new Date(photo.timestamp).toLocaleDateString() : '';

      card.innerHTML = `
        <img src="${photo.url}" loading="lazy" alt="${photo.activityName || 'Activity Photo'}">
        <div class="gallery-img-overlay">
          <div class="gallery-img-title" title="${photo.activityName || ''}">${photo.activityName || 'Untitled'}</div>
          <div class="gallery-img-date">${dateStr}</div>
        </div>
      `;
      galleryGrid.appendChild(card);
    });

    // Refresh lucide icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // ========== LIGHTBOX ==========
  function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    updateLightboxContent();
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (lightbox) lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const photo = filteredPhotos[currentLightboxIndex];
    if (!photo) return;

    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const date = document.getElementById('lightbox-date');
    const counter = document.getElementById('lightbox-counter');

    if (img) img.src = photo.url;
    if (title) title.textContent = photo.activityName || 'Untitled';
    if (date) date.textContent = photo.timestamp ? new Date(photo.timestamp).toLocaleDateString() : '';
    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${filteredPhotos.length}`;
  }

  // Lightbox navigation
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('gallery-lightbox')?.querySelector('.lightbox-overlay')?.addEventListener('click', closeLightbox);

  document.getElementById('lightbox-prev')?.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    updateLightboxContent();
  });

  document.getElementById('lightbox-next')?.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
    updateLightboxContent();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox || lightbox.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      updateLightboxContent();
    }
    if (e.key === 'ArrowRight') {
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
      updateLightboxContent();
    }
  });

  // ========== UPLOAD HANDLER ==========
  formUpload?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (typeof isAdmin !== 'undefined' && !isAdmin) {
      if (typeof showToast === 'function') showToast('Admin access required to upload photos.', 'error');
      return;
    }

    const file = photoInput.files[0];
    const selectedActId = activitySelect.value;

    if (!file || !selectedActId) return;

    if (typeof firebase === 'undefined' || !firebase.storage) {
      if (typeof showToast === 'function') showToast('Firebase Storage is not initialized.', 'error');
      return;
    }

    const act = typeof dbActivities !== 'undefined' ? dbActivities.get(selectedActId) : null;
    const actName = act ? (act.title || act.activity) : 'Unknown Activity';

    const storageRef = firebase.storage().ref();
    const fileName = `activity_photos/${Date.now()}_${file.name}`;
    const uploadTask = storageRef.child(fileName).put(file);

    if (progressContainer) progressContainer.classList.remove('hidden');
    if (btnSubmit) btnSubmit.disabled = true;

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progressBar) progressBar.style.width = progress + '%';
        if (progressText) progressText.textContent = Math.round(progress) + '%';
      },
      (error) => {
        console.error("Upload failed:", error);
        if (typeof showToast === 'function') showToast('Photo upload failed: ' + error.message, 'error');
        resetUploadForm();
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          if (typeof db !== 'undefined') {
            db.collection('activity_photos').add({
              url: downloadURL,
              activityId: selectedActId,
              activityName: actName,
              timestamp: Date.now()
            }).then(() => {
              if (typeof showToast === 'function') showToast('Photo uploaded successfully!', 'success');
              resetUploadForm();
              fetchPhotos();
            }).catch(err => {
              console.error("Error saving metadata: ", err);
              if (typeof showToast === 'function') showToast('Error saving photo data.', 'error');
              resetUploadForm();
            });
          }
        });
      }
    );
  });

  function resetUploadForm() {
    if (progressContainer) progressContainer.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';
    if (btnSubmit) btnSubmit.disabled = false;
    if (formUpload) formUpload.reset();
    if (uploadFormContainer) uploadFormContainer.classList.add('hidden');
    if (dropzonePreview) dropzonePreview.classList.add('hidden');
    if (dropzonePreviewImg) dropzonePreviewImg.src = '';
  }

  // ========== HELPERS ==========
  function showEmptyState(message) {
    if (emptyState) {
      emptyState.classList.remove('hidden');
      if (message) {
        const p = emptyState.querySelector('p');
        if (p) p.textContent = message;
      }
    }
  }

  function showLoading(show) {
    if (loadingState) {
      if (show) {
        loadingState.classList.remove('hidden');
        if (galleryGrid) galleryGrid.innerHTML = '';
        if (emptyState) emptyState.classList.add('hidden');
      } else {
        loadingState.classList.add('hidden');
      }
    }
  }

})();
