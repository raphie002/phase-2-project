// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

const API_URL = 'http://localhost:3001/movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  function addMovie(newMovie) {
    setMovies((currentMovies) => [...currentMovies, newMovie]);
  }

  function deleteMovie(movieId) {
    setMovies((currentMovies) => currentMovies.filter(movie => movie.id !== movieId));
  }
  
  function updateMovie(updatedMovie) {
    setMovies((currentMovies) => 
      currentMovies.map(movie => 
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  }

  if (loading) {
    return <h1>Loading Movies...</h1>;
  }

  return (
    <div className="app">
      <header>
        <h1>Movie Tracker</h1>
      </header>
      
      <NavBar />
      
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route 
            path="/movies" 
            element={<MovieList
                      movies={movies}
                      API_URL={API_URL}
                      deleteMovie={deleteMovie}
                      updateMovie={updateMovie}
                    />} 
          />
          <Route path="/new" element={<MovieForm API_URL={API_URL} addMovie={addMovie} />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
