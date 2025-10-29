# Movie Tracker Application 🎬

This is a single-page application (SPA) built with React that allows users to track and manage a list of movies. It demonstrates full CRUD (Create, Read, Update, Delete) functionality by interacting with a simple RESTful API powered by json-server.

# Features
Multi-Page UI: Uses React Router for client-side navigation between three routes: Home (/), View Movies (/movies), and Add New Movie (/new).
Data Management (CRUD):
   C (Create): Add new movies via a Controlled Form (POST request).
   R (Read): Fetch and display the initial movie list (GET request).
   U (Update): Change a movie's rating directly on the card (PATCH request).
   D (Delete): Remove a movie from the list (DELETE request).
State Management: All state changes (after POST, PATCH, or DELETE) are immediately reflected by updating the top-level state in App.js.
Styling: Modern, clean, and responsive design implemented with custom CSS.

# Setup and Installation
This project is set up with a single GitHub repository containing both the client (frontend) and server (backend) code in separate subdirectories.

# Prerequisites
Node.js and npm installed.
json-server installed globally (optional, but convenient for running the backend):Bashnpm install -g json-server
  
  1. Clone the Repository
     Bash
      git clone <YOUR_REPO_URL>
      cd movie-tracker
  
  2. Run the Backend Server (API)
    Open your first terminal window:
      1. Navigate into the backend directory:
         Bash
          cd backend
    
      2. Install dependencies (only json-server):
         Bash
          npm install
    
      3. Start the JSON server on port 3001:
         Bash
          npx json-server --watch db.json --port 3001
      The API will be available at http://localhost:3001/movies.3. 
  
  3. Run the Frontend Application
    Open your second terminal window:
       1. Navigate into the frontend directory:
            Bash
            cd frontend
       
       2. Install dependencies (React, React Router, etc.):
            Bash
            npm install
       
       3. Start the React development server:
            Bash
            npm start
          The application will open in your browser at http://localhost:3000.

# Deployment (Stretch Goal)
The application is configured to be deployed across two different services using a single repository.
  Component   Service  Root Directory  Environment Variable
  Frontend    Netlify  frontend/       N/A
  Backend     Render   backend/        REACT_APP_API_URL
  
  1. Backend Deployment (Render): Deploy the backend folder as a Node.js web service to Render to obtain a public API endpoint (e.g., https://my-movie-api.onrender.com).
  2. Frontend Configuration: Update the .env.production file in the frontend directory with your deployed backend URL.
  3. Frontend Deployment (Netlify):
     Connect your GitHub repository to Netlify.
     Set the Base directory to frontend/.
     Ensure the frontend/public/_redirects file exists to handle client-side routing.

# Project Structure.

   ├── backend/                  # JSON Server API (Repo #2 logic)
   │   ├── db.json               # Your data store
   │   └── package.json
   └── frontend/                 # React Application (Repo #1 logic)
       ├── public/
       │   └── _redirects        # Required for Netlify routing
       ├── src/
       │   ├── components/       # 5+ Organized components
       │   │   ├── MovieCard.js  # Renders single movie (U & D logic)
       │   │   ├── MovieForm.js  # Controlled form (C logic)
       │   │   ├── MovieList.js
       │   │   ├── NavBar.js
       │   │   └── Home.js
       │   └── App.js            # Main state, GET, and CRUD handlers
       └── package.json

# Technologies Used
 - Frontend: React, React Router DOM
 - Backend: JSON Server
 - Styling: Custom CSS
 - Deployment: Netlify (Frontend), Render (Backend)

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
| Operation	| Route/Component	| Method	| Description & State Change |
| Read (R)	| App.js / /movies | GET | Fetches the initial movie array from the server upon component mount. |
| Create (C) | MovieForm.js | POST | Uses a Controlled Form to submit new data. The returned object is immediately added to the local state via the addMovie prop. |
| Update (U) | MovieCard.js | PATCH | Sends a request to modify the movie's rating (/movies/:id). The updated object is used to replace the old object in the state array. |
| Delete (D) | MovieCard.js | DELETE | Sends a request to remove the item (/movies/:id). The local state is updated by using the .filter() method to remove the deleted movie. |

## BTechnologies Used
 - Frontend: React, React Router DOM

 - Backend: JSON Server (Mock API)

 - Styling: Custom CSS (Modern Aesthetic)