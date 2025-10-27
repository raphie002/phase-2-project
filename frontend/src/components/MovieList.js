
import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, API_URL, deleteMovie, updateMovie }) {
  const movieCards = movies.map(movie => (
    <MovieCard 
      key={movie.id} 
      movie={movie} 
      API_URL={API_URL}
      deleteMovie={deleteMovie} 
      updateMovie={updateMovie} 
    />
  ));

  return (
    <div className="movie-list-container">
      <h2>Current Movies ({movies.length})</h2>
      <div className="movie-list">
        {movieCards}
      </div>
    </div>
  );
}

export default MovieList;
