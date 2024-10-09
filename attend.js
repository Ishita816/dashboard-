// Attendance Statistics Chart Setup
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
const attendanceData = {
    labels: [
        'Fang Leng', 'Chai Xiao Qi', 'Gu Wei Yi', 'Si Tu Mo', 'Fu Pei', 'Fang Lie',
        'Xiao Bu', 'Jiang Xue', 'Wang Shan', 'Jiang', 'Zheng Shu Yi', 'Shi Yan'
    ],
    datasets: [{
        label: 'Days Present',
        data: [22, 20, 23, 18, 21, 19, 17, 22, 20, 19, 18, 16], // Example attendance data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

let attendanceChart = new Chart(attendanceCtx, {
    type: 'bar',
    data: attendanceData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Days Present'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Employees'
                }
            }
        }
    }
});

// Mark Attendance Button Logic
document.getElementById("markAttendanceBtn").addEventListener("click", () => {
    const employee = document.getElementById("employeeSelect").value;
    const date = document.getElementById("dateInput").value;
    const status = document.getElementById("statusSelect").value;
    alert(`Attendance marked: ${employee} on ${date} is ${status}.`);
});