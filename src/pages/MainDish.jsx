import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shared.css'; // Use shared.css for consistent styling
import { AiOutlineClockCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const MainDish = () => {
  const recipes = [
    { id: "maindish1", title: "Aloo Paratha", image: "/images/allooparotajpg.jpg", time: "60 min" },
    { id: "maindish2", title: "Crud Rice", image: "/images/curdrice.jpg", time: "45 min" },
    { id: "maindish3", title: "Crispy Dosa", image: "/images/dosa.jpg", time: "50 min" },
    { id: "maindish4", title: "Dumplings", image: "/images/dumplings.jpg", time: "50 min" },
    { id: "maindish5", title: "Idli", image: "/images/idli.jpg", time: "50 min" },
    { id: "maindish6", title: "Naan", image: "/images/naan.jpg", time: "50 min" },
    { id: "maindish7", title: "Noodels", image: "/images/noodels.jpg", time: "50 min" },
    { id: "maindish8", title: "Paratha", image: "/images/parota.jpg", time: "50 min" },
    { id: "maindish9", title: "Poori", image: "/images/poori.jpg", time: "50 min" },
    // Add more main dish recipes
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
           <h1>Main Dishes</h1>
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

export default MainDish;