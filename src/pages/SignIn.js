import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const initialObject = {
  email: "",
  password: "",
};

function SignIn() {
  const [loginInfo, setLoginInfo] = useState(initialObject);
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const onInputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const fetchUsers = async () => {
    let res = await fetch("http://localhost:8000/users");
    let data = await res.json();
    setUsers(data);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const emails = users.map((item) => item.email);
    if (
      emails.indexOf(loginInfo.email) >= 0 &&
      users[emails.indexOf(loginInfo.email)].password === loginInfo.password
    ) {
      const foundUser = users.find((item) => loginInfo.email === item.email);
      sessionStorage.setItem("user", JSON.stringify(foundUser));
      history.push("/");
    } else {
      return alert("The email or password is incorrect!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-lg-5 col-md-8 py-8 py-xl-0">
          <div className="card shadow ">
            <div className="card-body p-6">
              <div className="mb-4">
                <a href="../index.html">
                  <img
                    src="../assets/images/brand/logo/logo-icon.svg"
                    className="mb-4"
                    alt=""
                  />
                </a>
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>
                  Don’t have an account?{" "}
                  <Link to="/signup" className="ms-1">
                    Sign up
                  </Link>
                </span>
              </div>
              <form onSubmit={handleSignInSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username or email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address here"
                    onChange={onInputChange}
                    value={loginInfo.email}
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
                    value={loginInfo.password}
                  />
                </div>
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                    />
                    <label className="form-check-label " htmlFor="rememberme">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="forget-password.html">Forgot your password?</a>
                  </div>
                </div>
                <div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary ">
                      Sign in
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

export default SignIn;
