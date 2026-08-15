# Task Manager

A simple and responsive task management web application built using **HTML, CSS, and JavaScript**.

The project allows users to create and manage their daily tasks while keeping task data saved locally in the browser using **Local Storage**.

## Features

* Add new tasks
* Mark tasks as completed
* Edit existing tasks
* Delete tasks
* Persist tasks using browser Local Storage
* Automatically restore saved tasks when the application is reopened
* Simple and responsive interface

## Tech Stack

* **HTML5** — Structure
* **CSS3** — Styling and layout
* **JavaScript** — Application logic and DOM manipulation
* **Local Storage API** — Client-side data persistence

## How It Works

Tasks are stored as JavaScript objects containing the task text and completion status. The application serializes these objects into JSON and stores them in the browser's Local Storage.

When the application loads, previously saved tasks are retrieved and displayed automatically.

## Project Structure

```text
task-manager/
├── assets/
│   └── favicon.png
├── index.html
├── script.js
└── styles.css
```

## Running the Project

No backend or installation is required.

1. Clone the repository.
2. Open `index.html` in a web browser.
3. Start adding and managing tasks.

## What I Learned

This project provided hands-on experience with:

* JavaScript DOM manipulation
* Event handling
* Browser Local Storage
* JSON data handling
* Dynamic HTML element creation
* Basic responsive UI design

## Future Improvements

Potential improvements include:

* Task categories and priorities
* Due dates and reminders
* Search and filtering
* Drag-and-drop task organization
* Dark mode
* Backend/database integration
* User authentication
