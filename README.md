# Student Grade Tracker

Student Grade Tracker is a simple web app for adding, displaying, and managing student grades in the browser. It is built with HTML, CSS, and vanilla JavaScript, using arrays and objects to manage student data and DOM manipulation to keep the interface updated in real time.

## Project Objective

This project demonstrates understanding of:

- JavaScript arrays and objects
- DOM manipulation
- Event handling
- Input validation
- Browser storage with localStorage

## Features

- Add a student with a name and grade
- Store each student as an object with this structure:

```javascript
{ id: number, name: string, grade: number }
```

- Display all students dynamically in a table
- Show the total number of students
- Calculate and display the class average automatically
- Delete any student from the list
- Validate that the name is not empty
- Validate that the grade is between 0 and 100
- Highlight students who score above the class average
- Save data in localStorage so records remain after page refresh

## Files Included

- `index.html` - App structure and form layout
- `style.css` - Styling and responsive interface design
- `script.js` - Application logic, event handling, DOM updates, and localStorage

## How It Works

1. The user enters a student name and grade.
2. When the form is submitted, JavaScript validates the input.
3. A student object is created and pushed into the `students` array.
4. The app re-renders the student table and updates the average grade.
5. Clicking `Delete` removes the selected student, updates storage, and recalculates the average.

## Validation Rules

- Student name must not be empty.
- Grade must be a valid number.
- Grade must be between 0 and 100.
- An error message is displayed when input is invalid.

## Bonus Features Implemented

- Above-average students are highlighted in the table.
- Student records are stored in localStorage for persistence.

## How to Run

1. Download or clone the project.
2. Open `index.html` in a web browser.
3. Add student records using the form.

## Assessment Criteria Coverage

### 1. Data Structure Usage

The app uses an array named `students` to store student objects. Each object contains an `id`, `name`, and `grade`.

### 2. DOM Manipulation

The student list, student count, and average grade are updated dynamically whenever a student is added or removed.

### 3. Event Handling

The app listens for:

- Form submission to add a student
- Button clicks in the student list to delete a student

### 4. Input Validation

The app checks for empty names and invalid grade values before adding a student.

### 5. Bonus Features

The app includes both optional bonus features: above-average highlighting and localStorage persistence.

## Author

Akanwealth.
