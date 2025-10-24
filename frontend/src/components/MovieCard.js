// frontend/src/components/MovieCard.js
import React, { useState } from 'react';

function MovieCard({ movie, API_URL, deleteMovie, updateMovie }) {
  const [newRating, setNewRating] = useState(movie.rating || 0);

  function handleDelete() {
    fetch(`${API_URL}/${movie.id}`, {
      method: 'DELETE',
    })
    .then(() => {
      deleteMovie(movie.id); 
    })
    .catch(error => console.error("Error deleting movie:", error));
  }

  function handlePatch(e) {
    e.preventDefault();
    
    if (newRating === movie.rating) return; 

    fetch(`${API_URL}/${movie.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: newRating })
    })
    .then(res => res.json())
    .then(updatedData => {
      updateMovie(updatedData); 
    })
    .catch(error => console.error("Error updating movie:", error));
  }

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>Current Rating: {'★'.repeat(movie.rating || 0)}</p>

      <form onSubmit={handlePatch} style={{ margin: '10px 0', display: 'flex', gap: '5px' }}>
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(parseInt(e.target.value))}
          min="1"
          max="5"
          style={{ width: '60px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '4px' }}>
          Update Rating
        </button>
      </form>
      
      <button 
        onClick={handleDelete} 
        style={{ padding: '8px 15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
      >
        Delete Movie
      </button>
    </div>
  );
}

export default MovieCard;
