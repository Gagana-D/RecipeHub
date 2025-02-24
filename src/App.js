import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Breakfast from "./pages/Breakfast";
import Appetizer from "./pages/Appetizer";
import DessertSmoothies from "./pages/DessertSmoothies";
import MainDish from "./pages/MainDish";
import AddRecipe from "./pages/AddRecipe"; // Import AddRecipe

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/appetizer" element={<Appetizer />} />
        <Route path="/dessert-smoothies" element={<DessertSmoothies />} />
        <Route path="/main-dish" element={<MainDish />} />
        <Route path="/add-recipe" element={<AddRecipe />} /> {/* Add route for AddRecipe */}
      </Routes>
    </Router>
  );
}

export default App;