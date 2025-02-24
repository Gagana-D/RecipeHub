import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">RECIPEHUB</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EXPLORE
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/breakfast">
                    BREAKFAST
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appetizer">
                    APPETIZER
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dessert-smoothies">
                    DESSERT/SMOOTHIES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/main-dish">
                    MAIN DISH
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                FAVORITES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-recipe">
                ADDRECIPE
              </Link>
            </li>
          </ul>
          <form className="d-flex me-2" role="search">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search for a recipe"
              aria-label="Search"
            />
          </form>
          <div className="d-flex align-items-center">
            {isLoggedIn? (
              <>
                <Link className="nav-link text-dark" to="/profile">
                  Profile
                </Link>
                <Link className="nav-link text-dark" to="/logout">
                  Logout
                </Link>
              </>
            ): (
              <>
                <Link className="login-button" to="/login">
                  Log in
                </Link>
                <Link className="register-button" to="/register">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;