import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { GlobalContext } from "../../../Context/Context";
// import ShowCartView      //Future Stuff
// import CartView          //Futrue Stuff

function Header() {
  const { currentUser, logout } = useContext(GlobalContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [display, setDisplay] = useState({ name: "", on: false });
  const [error, setError] = useState("");

  useEffect(() => {
    setLoggedIn(currentUser ? true : false);
  }, [currentUser]);

  window.addEventListener("scroll", () => {
    let header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const handleChange = ({ target }) => {
    setDisplay({ name: target.id, on: !display.on });
    console.log(display);
  };

  const handleLogs = async () => {
    setError("");

    if (currentUser) {
      try {
        await logout();
      } catch (error) {
        setError("Failed to log out!");
      }
    } else {
      return loggedIn ? null : <Redirect to="/login" />;
    }
  };

  return (
    // <div className="headWrapper">
    <div id="header" className="header d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
        </div>

        <div className="right d-flex">
          <div className="navbar">
            <ul onMouseLeave={handleChange} class="nav">
              <li class="dropdown active">
                <a id={"home-menu"} onMouseOver={handleChange} href="#.">
                  Home
                </a>
                <ul
                  className={
                    display.name === "home-menu" && display.on
                      ? "dropdown-menu show"
                      : "dropdown-menu"
                  }
                >
                  <li>
                    <a href="index.html">Index Default</a>
                  </li>
                  <li>
                    <a href="index-1.html">Index 2</a>
                  </li>
                  <li>
                    <a href="index-2.html">Index 3</a>
                  </li>
                  <li>
                    <a href="index-header-1.html">Index Header 1</a>
                  </li>
                  <li>
                    <a href="index-header-2.html">Index Header 2</a>
                  </li>
                  <li>
                    <a href="index-header-3.html">Index Header 3</a>
                  </li>
                  <li>
                    <a href="index-header-4.html">Index Header 4</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown m">
                <a href="#">Pages</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">test</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown m">
                <a href="#">Pages</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">test</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="nav-right">
            <ul class="navbar-right d-flex align-items-center">
              {/* <!-- USER INFO --> */}
              <li onMouseLeave={handleChange} class="dropdown user-acc">
                <a
                  id="user-acc"
                  onMouseOver={handleChange}
                  className="dropdown-toggle"
                  href="#*"
                >
                  <i class="icon-user"></i>{" "}
                </a>
                <ul
                  style={{ width: "200px" }}
                  className={
                    display.name === "user-acc" && display.on
                      ? "dropdown-menu show"
                      : "dropdown-menu"
                  }
                >
                  <li>
                    <h6>
                      {currentUser
                        ? "Email: " + currentUser.email
                        : "Hello, Sign In!"}
                    </h6>
                  </li>
                  <li>
                    <Link to="/checkout">MY CART</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">ACCOUNT</Link>
                  </li>
                  <li>
                    <Button onClick={handleLogs} variant="link">
                      {loggedIn ? "Sign Out" : <Link to="/login">Log In</Link>}
                    </Button>
                  </li>
                </ul>
              </li>

              {/* <!-- USER BASKET --> */}
              <li class="dropdown user-basket">
                {" "}
                <a
                  href="#*"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <i class="icon-basket-loaded"></i>{" "}
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="media-left">
                      <div class="cart-img">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            class="media-object img-responsive"
                            src="images/cart-img-1.jpg"
                            alt="..."
                          />{" "}
                        </a>{" "}
                      </div>
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">WOOD CHAIR</h6>
                      <span class="price">129.00 USD</span>{" "}
                      <span class="qty">QTY: 01</span>{" "}
                    </div>
                  </li>
                  <li>
                    <div class="media-left">
                      <div class="cart-img">
                        {" "}
                        <a href="#">
                          {" "}
                          <img
                            class="media-object img-responsive"
                            src="images/cart-img-2.jpg"
                            alt="..."
                          />{" "}
                        </a>{" "}
                      </div>
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">WOOD STOOL</h6>
                      <span class="price">129.00 USD</span>{" "}
                      <span class="qty">QTY: 01</span>{" "}
                    </div>
                  </li>
                  <li>
                    <h5 class="text-center">SUBTOTAL: 258.00 USD</h5>
                  </li>
                  <li class="margin-0">
                    <div class="row">
                      <div class="col-xs-6">
                        {" "}
                        <a href="shopping-cart.html" class="btn">
                          VIEW CART
                        </a>
                      </div>
                      <div class="col-xs-6 ">
                        {" "}
                        <a href="checkout.html" class="btn">
                          CHECK OUT
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              {/* <!-- SEARCH BAR --> */}
              <li class="dropdown d-flex">
                {" "}
                <a href="javascript:void(0);" class="search-open">
                  <i class=" icon-magnifier"></i>
                </a>
                <div class="search-inside animated bounceInUp">
                  {" "}
                  {/* <i class="icon-close search-close"></i> */}
                  {/* <div class="search-overlay"></div> */}
                  {/* <div class="position-center-center">
                    <div class="search">
                      <form className="d-flex">
                        <input type="search" placeholder="Search Shop" />
                        <button type="submit">
                          <i class="icon-check"></i>
                        </button>
                      </form>
                    </div>
                  </div> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {error && <Alert>{error}</Alert>}
    </div>

    /* </div> */
  );
}

export default Header;
