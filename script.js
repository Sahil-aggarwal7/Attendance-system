const classes = [
    { id: 1, courseName: 'Math', instructor: 'John Doe', classTime: '10:00 AM', attendanceStatus: 'Present' },
    { id: 2, courseName: 'Science', instructor: 'Jane Smith', classTime: '11:30 AM', attendanceStatus: 'Absent' },
  ];
  
  // Function to create class cards and append to the dashboard
  function createClassCards() {
    const dashboard = document.querySelector('.dashboard');
    
    classes.forEach(classInfo => {
      const classCard = document.createElement('div');
      classCard.classList.add('class-card');
      
      classCard.innerHTML = `
        <h3>${classInfo.courseName}</h3>
        <p>Instructor: ${classInfo.instructor}</p>
        <p>Time: ${classInfo.classTime}</p>
        <p>Attendance: ${classInfo.attendanceStatus}</p>
        <button onclick="markAttendance(${classInfo.id})">Mark Attendance</button>
      `;
      
      dashboard.appendChild(classCard);
    });
  }
  
  // Function to simulate marking attendance
  function markAttendance(classId) {
    const classCard = document.querySelector(`.class-card[data-id="${classId}"]`);
    const attendanceStatus = classCard.querySelector('p[data-attendance]');
    
    attendanceStatus.textContent = 'Attendance: Present'; // Update status
    classCard.querySelector('button').disabled = true; // Disable the button
  }
  
  // Initialize the app
  createClassCards();
  