import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import "./theme.css";
import Home from "./pages/Home";
import "./styles/_global.scss";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";

import Course from "./pages/Course";
import AddCourse from "./pages/AddCourse";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Nav />
          <Home />
        </Route>
        <Route path="/courses">
          <Nav />
          <Courses />
        </Route>

        <Route path="/course/:id">
          <Nav />
          <Course />
        </Route>
        <Route path="/user" exact>
          <Redirect to="/user/dashboard" />
        </Route>
        <Route path="/user/dashboard">
          <Nav />
          <UserDashboard />
        </Route>
        <Route path="/addcourse">
          <Nav />
          <AddCourse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
