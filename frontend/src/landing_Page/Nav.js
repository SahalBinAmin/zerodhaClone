import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom pt-2"
      style={{ backgroundColor: "#FFF " }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            alt="img for logo"
            style={{ width: "20%" }}
          ></img>
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link class="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to={"/products"}>
                  Products
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to={"/pricing"}>
                  Pricing
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active" to={"/support"}>
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active "
                  aria-current="page"
                  to={"/signup"}
                >
                  Signup
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link active "
                  aria-current="page"
                  to={"/login"}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
