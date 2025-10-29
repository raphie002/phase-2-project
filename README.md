# Movie Tracker Application 🎬

## Description

The Movie Tracker is a single-page application (SPA) built using React that serves as a robust demonstration of core frontend development skills. It implements full CRUD (Create, Read, Update, Delete) functionality by interacting with a simple RESTful API powered by json-server. This project fulfills requirements including client-side routing, component organization, and immediate state updates following API interactions.

## Setup Instructions

This project adheres to a standard client/server architecture, with the code segregated into frontend/ (React) and backend/ (json-server) directories within a single repository. You must run both parts concurrently.

## Prerequisites
  1. Node.js and npm installed on your system.

  2. Basic knowledge of the command line interface.

## Steps
  1. Clone this repository:

      Bash

       git clone <YOUR_REPO_URL>
       cd movie-tracker

  2. Run the Backend (API Server) 💾:

     - Open Terminal 1, navigate to the backend folder, and run:

      Bash

       cd backend
       npm install  # Install json-server
       npx json-server --watch db.json --port 3001

     - The API will be active at http://localhost:3001/movies.

  3. Run the Frontend (React App) ⚛️:

     - Open Terminal 2, navigate to the frontend folder, and run:

      Bash

       cd frontend
       npm install
       npm start

     - The application will automatically open in your browser at http://localhost:3000.

## Technical Implementation Details
Component Structure and Routing
  - Multi-Page Experience: Achieved using React Router DOM with at least 3 client-side routes: Home (/), View Movies (/movies), and Add New Movie (/new).

  - Component Organization: The application utilizes 5+ functional components (App, NavBar, Home, MovieList, MovieForm, and MovieCard) organized within the src/components folder for code clarity and reusability.

  - Navigation: A dedicated NavBar component provides clear links between all available routes.

Data Flow and State Management
  - Top-Level State: The central list of movies is managed using the useState hook within the main App.js component.

  - Prop Drilling: State and update functions (addMovie, deleteMovie, updateMovie) are passed down as props to child components (MovieList, MovieForm, and MovieCard).

  - Immediate Re-rendering: All successful POST, PATCH, and DELETE operations trigger an immediate state update in App.js (e.g., using setMovies([...movies, newMovie]) or array filtering), ensuring the UI reflects the latest data without requiring a manual page refresh.

## BDD (Behavior Driven Development) - CRUD Breakdown
Operation,Route/Component,Method,Description & State Change
Read (R),App.js / /movies,GET,Fetches the initial movie array from the server upon component mount.
Create (C),MovieForm.js,POST,Uses a Controlled Form to submit new data. The returned object is immediately added to the local state via the addMovie prop.
Update (U),MovieCard.js,PATCH,Sends a request to modify the movie's rating (/movies/:id). The updated object is used to replace the old object in the state array.
Delete (D),MovieCard.js,DELETE,Sends a request to remove the item (/movies/:id). The local state is updated by using the .filter() method to remove the deleted movie.

## BTechnologies Used
 - Frontend: React, React Router DOM

 - Backend: JSON Server (Mock API)

 - Styling: Custom CSS (Modern Aesthetic)