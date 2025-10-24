// frontend/src/components/MovieForm.js
import React, { useState } from 'react';

function MovieForm({ API_URL, addMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    rating: 0
  });

  function handleChange(e) {
    let value = e.target.value;
    if (e.target.name === 'year' || e.target.name === 'rating') {
      value = parseInt(value);
    }
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    fetch(API_URL, configObj)
      .then(res => res.json())
      .then(data => {
        addMovie(data);
        
        setFormData({ title: '', year: '', rating: 0 });
        alert(`Movie "${data.title}" added successfully!`);
      })
      .catch(error => console.error("Error posting new movie:", error));
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Movie Title" 
          required 
        />
        
        <input 
          type="number" 
          name="year" 
          value={formData.year} 
          onChange={handleChange} 
          placeholder="Release Year" 
          min="1888" 
          max={new Date().getFullYear()}
          required 
        />
        
        <label>
          Rating (1-5):
          <input 
            type="number" 
            name="rating" 
            value={formData.rating} 
            onChange={handleChange} 
            min="1" 
            max="5"
            required 
          />
        </label>

        <button type="submit" style={{ padding: '10px', backgroundColor: 'darkgreen', color: 'white' }}>
          Submit Movie
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
