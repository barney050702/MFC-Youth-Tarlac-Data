let reportsMembersChart = null;
let reportsAttendanceChart = null;

window.renderReports = function() {
  const members = dbMembers.getAll();
  const activities = dbActivities.getAll();

  // 1. Members by Chapter Chart
  const chapters = ['EAST', 'WEST', 'NORTH', 'SOUTH', 'AREA'];
  const chapterCounts = chapters.map(ch => 
    members.filter(m => m.chapter_area === ch && m.status === 'Active').length
  );

  const ctxMembers = document.getElementById('reportsMembersChart').getContext('2d');
  if (reportsMembersChart) reportsMembersChart.destroy();
  
  reportsMembersChart = new Chart(ctxMembers, {
    type: 'pie',
    data: {
      labels: chapters,
      datasets: [{
        data: chapterCounts,
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
        borderWidth: 2,
        borderColor: '#0f172a',
        hoverOffset: 15
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#f8fafc', padding: 20, font: { family: "'Outfit', sans-serif" } } }
      }
    }
  });

  // 2. Activity Attendance (Last 6 Months)
  // Sort activities by date
  const sortedActivities = activities.filter(a => a.date && a.status === 'Accomplished')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-10); // get last 10 activities
    
  const activityLabels = sortedActivities.map(a => a.activity.length > 15 ? a.activity.substring(0, 15) + '...' : a.activity);
  const activityAttendance = sortedActivities.map(a => parseInt(a.participants) || 0);

  const ctxAttendance = document.getElementById('reportsAttendanceChart').getContext('2d');
  if (reportsAttendanceChart) reportsAttendanceChart.destroy();
  
  reportsAttendanceChart = new Chart(ctxAttendance, {
    type: 'bar',
    data: {
      labels: activityLabels,
      datasets: [{
        label: 'Attendees',
        data: activityAttendance,
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
        borderColor: '#a855f7',
        borderWidth: 1,
        borderRadius: 6,
        hoverBackgroundColor: '#c084fc'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
};
