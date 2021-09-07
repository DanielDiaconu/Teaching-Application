import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeBottomSection from "../components/homeModule/HomeBottomSection";
import HomeIntro from "../components/homeModule/HomeIntro";
import HomeOurUsers from "../components/homeModule/HomeOurUsers";
import HomeTopSection from "../components/homeModule/HomeTopSection";

function Home() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    let res = await axios.get("http://localhost:8000/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 fw-bold">
                  Welcome to Edu-Course
                </h1>
                <p className="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed
                  for the modern students and entrepreneur.
                </p>
                <Link to="/courses" className="btn btn-success mr-5">
                  Browse Courses
                </Link>
              </div>
            </div>
            <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
              <img src={"/images/home-page.svg"} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey py-4 shadow-sm ">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i className="fe fe-video"> </i>
                </span>
                <div className="ms-3">
                  <h4 className="mb-0 fw-semi-bold">
                    {courses?.length} online courses
                  </h4>
                  <p className="mb-0">Enjoy a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i className="fe fe-users"> </i>
                </span>
                <div className="ms-3">
                  <h4 className="mb-0 fw-semi-bold">Expert instruction</h4>
                  <p className="mb-0">Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i className="fe fe-clock"> </i>
                </span>
                <div className="ms-3">
                  <h4 className="mb-0 fw-semi-bold">Lifetime access</h4>
                  <p className="mb-0">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeIntro />
      <HomeOurUsers />
      <HomeTopSection />
      <HomeBottomSection />
    </div>
  );
}

export default Home;
