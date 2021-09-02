import React from "react";
import { Link, NavLink, useLocation, useRouteMatch } from "react-router-dom";

function UserDashboardNav() {
  let { url } = useRouteMatch();
  let location = useLocation();

  return (
    <div className="col-lg-3 col-md-4 col-12">
      <nav className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav">
        <a
          className="d-xl-none d-lg-none d-md-none text-inherit fw-bold"
          href="#"
        >
          Menu
        </a>
        <button
          className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidenav"
          aria-controls="sidenav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fe fe-menu"></span>
        </button>
        <div className="collapse navbar-collapse" id="sidenav">
          <div className="navbar-nav flex-column">
            <span className="navbar-header">Account Settings</span>
            <ul className="list-unstyled ms-n2 mb-0">
              <li
                className={
                  location.pathname === `${url}/edit-profile`
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <NavLink className="nav-link" to={`${url}/edit-profile`}>
                  <i className="fe fe-settings nav-icon"></i>Edit Profile
                </NavLink>
              </li>

              <li
                className={
                  location.pathname === `${url}/bookmarks`
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <NavLink className="nav-link nav-item" to={`${url}/bookmarks`}>
                  <i className="fe fe-bookmark nav-icon"></i>Bookmarks
                </NavLink>
              </li>
              <li
                className={
                  location.pathname === `${url}/enrolled`
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <NavLink className="nav-link" to={`${url}/enrolled`}>
                  <i className="fe fe-book-open nav-icon"></i>Enrolled
                </NavLink>
              </li>
              <li
                className={
                  location.pathname === `${url}/instructor`
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <NavLink className="nav-link" to={`${url}/instructor`}>
                  <i className="fe fe-user nav-icon"></i>Instructor
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserDashboardNav;
