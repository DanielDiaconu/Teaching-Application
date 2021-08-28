import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const newUser = {
  username: "",
  email: "",
  password: "",
  bookmarks: [],
  enrolledCourses: [],
};

function SignUp() {
  const [user, setUser] = useState(newUser);
  const history = useHistory();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitUser = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    // sessionStorage.setItem("user", JSON.stringify(data));
    history.push("/signin");
  };

  return (
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
          <div className="card shadow">
            <div className="card-body p-6">
              <div className="mb-4">
                <a href="../index.html">
                  <img
                    src="../assets/images/brand/logo/logo-icon.svg"
                    className="mb-4"
                    alt=""
                  />
                </a>
                <h1 className="mb-1 fw-bold">Sign up</h1>
                <span>
                  Already have an account?
                  <Link to="/signin" className="ms-1">
                    Sign in
                  </Link>
                </span>
              </div>
              <form onSubmit={submitUser}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="username"
                    placeholder="User Name"
                    value={user.username}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address here"
                    value={user.email}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="**************"
                    onChange={onInputChange}
                    value={user.password}
                  />
                </div>
                <div className="mb-3"></div>
                <div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Create Free Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
