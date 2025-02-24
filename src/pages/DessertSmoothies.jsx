import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shared.css'; // Use shared.css for consistent styling
import { AiOutlineClockCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const DessertSmoothies = () => {
  const recipes = [
    { id: "d1", title: "Brownie", image: "/images/brownie.jpg", time: "15 min" },
    { id: "d2", title: "Cheese Cake 1", image: "/images/cheesecake.jpg", time: "10 min" },
    { id: "d3", title: "Gulab Jamun", image: "/images/gulabjamun.jpg", time: "20 min" },
    { id: "d4", title: "Plum Cake", image: "/images/plum cake.webp", time: "20 min" },
    { id: "d5", title: "Pudding", image: "/images/pudding.jpg", time: "20 min" },
    { id: "s1", title: "Carrot Smoothie 6", image: "/images/carrotjucie.jpg", time: "20 min" },
    { id: "s2", title: "Coconut Smoothie", image: "/images/coconutjucie.jpg", time: "20 min" },
    { id: "s3", title: "Rainbow Smoothie", image: "/images/rainbowjucie.jpg", time: "20 min" },
    { id: "s4", title: "Star Frutie Smoothie", image: "/images/starfrutie.jpg", time: "20 min" },
    // Add more dessert/smoothie recipes
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
            <h1>Desserts & Smoothies</h1>
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

export default DessertSmoothies;