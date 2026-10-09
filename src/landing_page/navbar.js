import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary" style={{ backgroundColor: "#f8f9fa" }}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="image/logo.svg" alt="logo" style={{ width: "25%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">

                  about
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  products
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  pricing
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  support
                </Link>
              </li>
              
                
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
