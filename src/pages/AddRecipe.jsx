import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: null,
    time: '',
    cuisine: '',
    category: '',
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setRecipe({ ...recipe, image: e.target.files[0] });
    } else {
      setRecipe({ ...recipe, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'll send the recipe data to your backend or database
    console.log(recipe);
    // You can also add logic to clear the form fields after submission
    setRecipe({
      name: '',
      ingredients: '',
      instructions: '',
      image: null,
      time: '',
      cuisine: '',
      category: '',
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block' }}>Recipe Name:</label>
          <input type="text" id="name" name="name" value={recipe.name} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="ingredients" style={{ display: 'block' }}>Ingredients:</label>
          <textarea id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="instructions" style={{ display: 'block' }}>Instructions:</label>
          <textarea id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image" style={{ display: 'block' }}>Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="time" style={{ display: 'block' }}>Time (e.g., 30 min):</label>
          <input type="text" id="time" name="time" value={recipe.time} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="cuisine" style={{ display: 'block' }}>Cuisine:</label>
          <input type="text" id="cuisine" name="cuisine" value={recipe.cuisine} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="category" style={{ display: 'block' }}>Category:</label>
          <input type="text" id="category" name="category" value={recipe.category} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;