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
      Bashgit clone <YOUR_REPO_URL>
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
Frontend: React, React Router DOM
Backend: JSON Server
Styling: Custom CSS
Deployment: Netlify (Frontend), Render (Backend)