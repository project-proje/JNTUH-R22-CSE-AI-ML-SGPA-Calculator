// Semester Data
const semesterData = {
    "1-1": [
      { name: "Matrices and Calculus", credits: 4 },
      { name: "Applied Physics", credits: 4 },
      { name: "Programming for Problem Solving", credits: 3 },
      { name: "Engineering Workshop", credits: 2.5 },
      { name: "English for Skill Enhancement", credits: 2 },
      { name: "Elements of Computer Science & Engineering", credits: 1 },
      { name: "Applied Physics Laboratory", credits: 1.5 },
      { name: "Programming for Problem Solving Laboratory", credits: 1 },
      { name: "English Language and Communication Skills Laboratory", credits: 1 },
    ],
    "1-2": [
      { name: "Ordinary Differential Equations and Vector Calculus", credits: 4 },
      { name: "Engineering Chemistry", credits: 4 },
      { name: "Computer Aided Engineering Graphics", credits: 3 },
      { name: "Basic Electrical Engineering", credits: 2 },
      { name: "Electronic Devices and Circuits", credits: 2 },
      { name: "Engineering Chemistry Laboratory", credits: 1 },
      { name: "Basic Electrical Engineering Laboratory", credits: 1 },
      { name: "Python Programming Laboratory", credits: 2 },
      { name: "IT Workshop", credits: 1 },
    ],
    "2-1": [
      { name: "Discrete Mathematics", credits: 3 },
      { name: "Data Structures", credits: 3 },
      { name: "Computer Organization and Architecture", credits: 3 },
      { name: "Software Engineering", credits: 3 },
      { name: "Operating Systems", credits: 3 },
      { name: "Data Structures Lab", credits: 1.5 },
      { name: "Operating Systems Lab", credits: 1.5 },
      { name: "Software Engineering Lab", credits: 1 },
      { name: "Constitution of India", credits: 0 },
      { name: "Skill Development Course (Node JS/ React JS/ Django)", credits: 1 },
    ],
    "2-2": [
      { name: "Mathematical and Statistical Foundations", credits: 3 },
      { name: "Automata Theory and Compiler Design", credits: 3 },
      { name: "Database Management Systems", credits: 3 },
      { name: "Introduction to Artificial Intelligence", credits: 3 },
      { name: "Object Oriented Programming through Java", credits: 3 },
      { name: "Database Management Systems Lab", credits: 1 },
      { name: "Java Programming Lab", credits: 1 },
      { name: "Real-time Research Project/Field-Based Research Project", credits: 2 },
      { name: "Gender Sensitization Lab", credits: 0 },
      { name: "Skill Development Course (Prolog/ Lisp/ Pyswip)", credits: 1 },
    ],
    "3-1": [
      { name: "Design and Analysis of Algorithms", credits: 4 },
      { name: "Machine Learning", credits: 3 },
      { name: "Computer Networks", credits: 3 },
      { name: "Business Economics & Financial Analysis", credits: 3 },
      { name: "Professional Elective-I", credits: 3 },
      { name: "Machine Learning Lab", credits: 1 },
      { name: "Computer Networks Lab", credits: 1 },
      { name: "Advanced Communication Skills Lab", credits: 1 },
      { name: "Intellectual Property Rights", credits: 0 },
      { name: "Skill Development Course (UI Design - Flutter)", credits: 1 },
    ],
    "3-2": [
      { name: "Knowledge Representation and Reasoning", credits: 3 },
      { name: "Data Analytics", credits: 3 },
      { name: "Natural Language Processing", credits: 3 },
      { name: "Professional Elective-II", credits: 3 },
      { name: "Open Elective-I", credits: 3 },
      { name: "Natural Language Processing Lab", credits: 1.5 },
      { name: "Data Analytics Lab", credits: 1.5 },
      { name: "Industrial Oriented Mini Project/ Internship/Skill Development Course (DevOps)", credits: 2 },
      { name: "Environmental Science", credits: 0 },
    ],
    "4-1": [
      { name: "Deep Learning", credits: 3 },
      { name: "Nature Inspired Computing", credits: 2 },
      { name: "Professional Elective-III", credits: 3 },
      { name: "Professional Elective-IV", credits: 3 },
      { name: "Open Elective-II", credits: 3 },
      { name: "Professional Practice, Law & Ethics", credits: 2 },
      { name: "Professional Elective-III Lab", credits: 1 },
      { name: "Project Stage-I", credits: 3 },
    ],
    "4-2": [
      { name: "Professional Elective-V", credits: 3 },
      { name: "Professional Elective-VI", credits: 3 },
      { name: "Open Elective-III", credits: 3 },
      { name: "Project Stage-II including Seminar", credits: 11 },
    ],
  };
  
  // Function to load the calculator
  function loadCalculator() {
    const year = document.getElementById("year-select").value;
    const semester = document.getElementById("semester-select").value;
  
    if (!year || !semester) {
      alert("Please select both year and semester.");
      return;
    }
  
    const semesterKey = `${year}-${semester}`;
  
    // Fade out homepage
    document.getElementById("homepage").style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => {
      document.getElementById("homepage").style.display = "none";
      document.getElementById("calculator").style.display = "block";
      document.getElementById("semester-title").innerText = ` ${year} Year  ${semester} Semester`;
  
      // Generate table
      generateTable(semesterKey);
    }, 500); // Wait for fade-out animation to complete
  }
  
  // Function to go back to homepage
  function goBackToHome() {
    document.getElementById("calculator").style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => {
      document.getElementById("calculator").style.display = "none";
      document.getElementById("homepage").style.display = "flex";
      document.getElementById("homepage").style.animation = "fadeIn 0.5s ease-in-out";
  
      // Reset dropdowns
      document.getElementById("year-select").value = "";
      document.getElementById("semester-select").value = "";
    }, 500); // Wait for fade-out animation to complete
  }
  
  // Function to generate the table
  function generateTable(semesterKey) {
    const tableBody = document.querySelector("#subject-table tbody");
    tableBody.innerHTML = ""; // Clear previous content
  
    const subjects = semesterData[semesterKey];
  
    subjects.forEach((subject, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${subject.name}</td>
        <td>${subject.credits}</td>
        <td><input type="number" id="marks${index + 1}" max="100" min="0"></td>
        <td id="grade${index + 1}">-</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Show table container
    document.getElementById("table-container").style.display = "block";
  }
  
  // Function to calculate grade
  function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
      alert("Please enter marks between 0 and 100.");
      return { grade: "-", points: 0 };
    }
    if (marks >= 90) return { grade: 'O', points: 10 };
    if (marks >= 80) return { grade: 'A+', points: 9 };
    if (marks >= 70) return { grade: 'A', points: 8 };
    if (marks >= 60) return { grade: 'B+', points: 7 };
    if (marks >= 50) return { grade: 'B', points: 6 };
    if (marks >= 40) return { grade: 'C', points: 5 };
    return { grade: 'F', points: 0 };
  }
  
  // Function to calculate SGPA
  function calculateSGPA() {
    const year = document.getElementById("year-select").value;
    const semester = document.getElementById("semester-select").value;
    const semesterKey = `${year}-${semester}`;
    const subjects = semesterData[semesterKey];
  
    let totalCredits = 0,
      weightedPoints = 0;
    let anyFail = false;
  
    subjects.forEach((subject, index) => {
      const marks = parseFloat(document.getElementById(`marks${index + 1}`).value);
      if (isNaN(marks) || marks === "") {
        alert("Please enter marks for all subjects.");
        return;
      }
      const { grade, points } = calculateGrade(marks);
      document.getElementById(`grade${index + 1}`).textContent = grade;
  
      if (grade === "F") {
        anyFail = true;
      } else {
        totalCredits += subject.credits;
        weightedPoints += points * subject.credits;
      }
    });
  
    if (anyFail) {
      document.getElementById("result").innerText =
        "You have received an F in one or more subjects. Keep pushing forward!";
      return;
    }
  
    const sgpa = (weightedPoints / totalCredits).toFixed(2);
    document.getElementById("result").innerText = "SGPA: " + sgpa;
  }
  
  // Function to reset the form
  function resetForm() {
    const year = document.getElementById("year-select").value;
    const semester = document.getElementById("semester-select").value;
    const semesterKey = `${year}-${semester}`;
    const subjects = semesterData[semesterKey];
  
    subjects.forEach((subject, index) => {
      document.getElementById(`marks${index + 1}`).value = "";
      document.getElementById(`grade${index + 1}`).textContent = "-";
    });
    document.getElementById("result").innerText = "";
  }



  