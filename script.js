const STORAGE_KEY = "grade-tracker-students";

const form = document.getElementById("student-form");
const nameInput = document.getElementById("student-name");
const gradeInput = document.getElementById("student-grade");
const errorMessage = document.getElementById("form-error");
const studentList = document.getElementById("student-list");
const studentCount = document.getElementById("student-count");
const averageGrade = document.getElementById("average-grade");
const emptyState = document.getElementById("empty-state");

let students = loadStudents();

function loadStudents() {
  const storedStudents = localStorage.getItem(STORAGE_KEY);

  if (!storedStudents) {
    return [];
  }

  try {
    const parsedStudents = JSON.parse(storedStudents);
    return Array.isArray(parsedStudents) ? parsedStudents : [];
  } catch {
    return [];
  }
}

function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function calculateAverage() {
  if (students.length === 0) {
    return 0;
  }

  const total = students.reduce((sum, student) => sum + student.grade, 0);
  return total / students.length;
}

function clearError() {
  errorMessage.textContent = "";
}

function showError(message) {
  errorMessage.textContent = message;
}

function renderStudents() {
  const average = calculateAverage();

  studentList.innerHTML = "";
  studentCount.textContent = String(students.length);
  averageGrade.textContent = average.toFixed(2);
  emptyState.hidden = students.length > 0;

  students.forEach((student) => {
    const row = document.createElement("tr");
    const isAboveAverage = students.length > 1 && student.grade > average;

    if (isAboveAverage) {
      row.classList.add("above-average");
    }

    row.innerHTML = `
      <td>${student.name}</td>
      <td><span class="grade-pill">${student.grade.toFixed(2)}</span></td>
      <td>
        <button type="button" class="delete-button" data-id="${student.id}">Delete</button>
      </td>
    `;

    studentList.appendChild(row);
  });
}

function createStudent(name, grade) {
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name,
    grade,
  };
}

function validateStudent(name, gradeValue) {
  if (!name.trim()) {
    return "Student name is required.";
  }

  if (gradeValue === "") {
    return "Grade is required.";
  }

  const grade = Number(gradeValue);

  if (Number.isNaN(grade) || grade < 0 || grade > 100) {
    return "Grade must be a number between 0 and 100.";
  }

  return "";
}

function addStudent(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const gradeValue = gradeInput.value.trim();
  const validationError = validateStudent(name, gradeValue);

  if (validationError) {
    showError(validationError);
    return;
  }

  students.push(createStudent(name, Number(gradeValue)));
  saveStudents();
  renderStudents();
  clearError();
  form.reset();
  nameInput.focus();
}

function deleteStudent(event) {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement) || !target.dataset.id) {
    return;
  }

  students = students.filter((student) => student.id !== Number(target.dataset.id));
  saveStudents();
  renderStudents();
}

form.addEventListener("submit", addStudent);
studentList.addEventListener("click", deleteStudent);

renderStudents();
