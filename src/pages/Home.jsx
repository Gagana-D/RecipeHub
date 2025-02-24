import React, { useState } from 'react';
import './Home.css';
import './shared.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Home = () => {
  const recommendedRecipes = [
    { id: "bk2", title: "Waffles", image: "/images/Waffles_9.webp", time: "20 min" },
    { id: "d2", title: "Cheese Cake 1", image: "/images/cheesecake.jpg", time: "10 min" },
    { id: "d3", title: "Gulab Jamun", image: "/images/gulabjamun.jpg", time: "20 min" },
    { id: "maindish3", title: "Crispy Dosa", image: "/images/dosa.jpg", time: "50 min" },
    { id: "maindish6", title: "Naan", image: "/images/naan.jpg", time: "50 min" },
    { id: "s2", title: "Coconut Smoothie", image: "/images/coconutjucie.jpg", time: "20 min" },
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
    <div className="home-container">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-content">
              <img src="/slide1.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
              <div className="slide-caption">
                <h1>WELCOME TO RECIPEHUB</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slide-content">
              <img src="/ban.jpg" className="d-block w-100 carousel-image" alt="Slide 2" />
              <div className="slide-caption">
                <h1>GOOD FOOD GOOD MOOD</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slide-content">
              <img src="/slide3.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
              <div className="slide-caption">
                <h1>READY TO EAT</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="content-section">
        <h2 className="recommended-heading">RECOMMENDED</h2>
        <div className="card-container">
          {recommendedRecipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{recipe.title}</h2>
                <p className="card-time">{recipe.time}</p>
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
    </div>
  );
};

export default Home;