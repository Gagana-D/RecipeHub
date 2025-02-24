import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shared.css'; // Assuming you're using shared.css
import { AiOutlineClockCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Breakfast = () => {
  const recipes = [
    { id: "bk1", title: "Masala Idli", image: "/images/5-minutes-fried-masala-idli.webp", time: "30 min" },
    { id: "bk2", title: "Waffles", image: "/images/Waffles_9.webp", time: "20 min" },
    { id: "bk3", title: "Ham & Cheese Omelette", image: "/images/Ham-and-cheese-omelette_1.webp", time: "15 min" },
    { id: "bk4", title: "Caramel Banana Omelette", image: "/images/caramel-banana-oatmeal copy.webp", time: "15min" },
    { id: "bk5", title: "Fluffy Pancakes", image: "/images/fluffypancakes.jpeg", time: "25 min" },
    { id: "bk6", title: "Fruits Choco Pancakes", image: "/images/millets-fruits-choco-chips-pancakes.webp", time: "25 min" },
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
            <h1>Breakfast</h1>
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

export default Breakfast;