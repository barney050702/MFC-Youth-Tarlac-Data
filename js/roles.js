// js/roles.js
// NOTE: This logic requires a 'user_roles' collection in Firestore.
// Once you set it up, you can integrate this into app.js inside the auth listener.

window.fetchUserRole = async function(uid) {
  if (!db) return null;
  try {
    const doc = await db.collection('user_roles').doc(uid).get();
    if (doc.exists) {
      return doc.data(); // { role: "Chapter Head", chapter: "EAST" }
    }
    return { role: "Super Admin" }; // Default fallback for existing auth users
  } catch (err) {
    console.error("Error fetching user role:", err);
    return { role: "Admin" };
  }
};

window.applyRoleBasedUI = function(roleData) {
  const { role, chapter } = roleData;
  
  if (role === 'Super Admin') {
    // Show everything
    document.querySelectorAll('.admin-only').forEach(el => el.classList.remove('hidden'));
  } else if (role === 'Chapter Head') {
    // Hide financial tabs
    document.getElementById('sidebar-tab-funds').classList.add('hidden');
    // Set member filter automatically to their chapter and disable changing it
    const chapterFilter = document.getElementById('filter-member-chapter');
    if (chapterFilter) {
      chapterFilter.value = chapter.toUpperCase();
      chapterFilter.disabled = true; 
    }
  }
};
