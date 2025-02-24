import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shared.css'; // Use shared.css for consistent styling
import { AiOutlineClockCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Appetizer = () => {
  const recipes = [
    { id: "a1", title: "Chana Masala", image: "/images/channamasala.jpg", time: "30 min" },
    { id: "a2", title: "Chikki Masala", image: "/images/chikkimasala.jpg", time: "20 min" },
    { id: "a3", title: "Cheese Pizza", image: "/images/classic-cheese-pizza.avif", time: "25 min" },
    { id: "a4", title: "French Fries", image: "/images/Fries.webp", time: "25 min" },
    { id: "a5", title: "Garlick Potato", image: "/images/GarlickPotato.jpg", time: "25 min" },
    { id: "a6", title: "Manchurian", image: "/images/gobi.jpg", time: "25 min" },
    { id: "a7", title: "Corn Bhel", image: "/images/mexican-corn-bhel.webp", time: "25 min" },
    { id: "a8", title: "Jalapeno Nachos", image: "/images/Jalapeno-Popper-Nachos.jpg", time: "25 min" },
    { id: "a9", title: "PaniPuri", image: "/images/pani-puri.jpg", time: "25 min" },
    { id: "a10", title: "Samosa", image: "/images/samosa.jpg", time: "25 min" },
    { id: "a9", title: "Momos", image: "/images/momos.jpg", time: "25 min" },
    
    // Add more appetizer recipes
  ];

  const [likedRecipes, setLikedRecipes] = useState([]);

  const handleLike = (recipeId) => {
    if (likedRecipes.includes(recipeId)) {
      setLikedRecipes(likedRecipes.filter((id) => id !== recipeId));
    } else {
      setLikedRecipes([...likedRecipes, recipeId]);
    }
  };

  return (
    <div className="breakfast-container">
           <h1>Appetizers</h1>
      <div className="card-container">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="card-time">
                <AiOutlineClockCircle className="clock-icon" /> {recipe.time}
              </p>
              <Link to={`/recipe/${recipe.id}`} className="card-button">See More</Link>
              <div className="card-icons">
                {likedRecipes.includes(recipe.id) ? (
                  <AiFillHeart className="heart-icon liked" onClick={() => handleLike(recipe.id)} />
                ) : (
                  <AiOutlineHeart className="heart-icon" onClick={() => handleLike(recipe.id)} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appetizer;