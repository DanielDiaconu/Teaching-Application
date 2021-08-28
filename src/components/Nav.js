import React from "react";
import Logo from "../images/brand/logo.svg";
import Avatar from "../images/avatar/avatar-img.jpg";
import { Link } from "react-router-dom";
import NavAvatar from "./navModule/NavAvatar";

function Nav() {
  const user = sessionStorage.getItem("user");

  return (
    <nav className="navbar navbar-expand-lg navbar-default">
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="./index.html">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar top-bar mt-0"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
          <ul className="navbar-nav ">
            <li className="navbar-item mr-15">
              <Link className="nav-links-style" to="/courses">
                Courses
              </Link>
            </li>
            <li className="navbar-item mr-15">
              <Link className="nav-links-style" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="navbar-item mr-15">
              <Link className="nav-links-style" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item mr-15">
              <Link className="nav-links-style" to="/user">
                User
              </Link>
            </li>
            <li className="navbar-item mr-15">
              <Link className="nav-links-style" to="/addcourse">
                Add Course
              </Link>
            </li>
          </ul>

          <div
            className="dropdown-menu dropdown-menu-md"
            aria-labelledby="navbarDropdown"
          >
            <div className="list-group">
              <a
                className="list-group-item list-group-item-action border-0"
                href="./docs/index.html"
              >
                <div className="d-flex align-items-center">
                  <i className="fe fe-file-text fs-3 text-primary"></i>
                  <div className="ms-3">
                    <h5 className="mb-0">Documentations</h5>
                    <p className="mb-0 fs-6">Browse the all documentation</p>
                  </div>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="./docs/changelog.html"
              >
                <div className="d-flex align-items-center">
                  <i className="fe fe-layers fs-3 text-primary"></i>
                  <div className="ms-3">
                    <h5 className="mb-0">
                      Changelog{" "}
                      <span className="text-primary ms-1">v2.2.0</span>
                    </h5>
                    <p className="mb-0 fs-6">See what's new</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search"></i>
            </span>
            <input
              type="search"
              className="form-control ps-6"
              placeholder="Search Courses"
            />
          </form>
          {user ? (
            <NavAvatar user={user} />
          ) : (
            <Link className="sign-in-div" to="/signin">
              <div>Sign In</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
