import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Hero from "../images/hero/hero.png";

function Home() {
  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 fw-bold">
                  Welcome to Geeks UI Learning Application
                </h1>
                <p className="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed
                  for the modern students and entrepreneur.
                </p>
                <Link to="/courses" className="btn btn-success ">
                  Browse Courses
                </Link>
                <Link to="/addcourse" className="btn btn-white">
                  Are You Instructor?
                </Link>
              </div>
            </div>
            <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
              <img src={Hero} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 shadow-sm">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i className="fe fe-video"> </i>
                </span>
                <div className="ms-3">
                  <h4 className="mb-0 fw-semi-bold">30,000 online courses</h4>
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
      <div className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Recommended to you</h2>
            </div>
          </div>
          <div className="position-relative d-flex align-items-center home-course-cards">
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">Trending</h2>
            </div>
          </div>
          <div className="position-relative d-flex align-items-center home-course-cards">
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
            </div>
            <div className="home-course-card">
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
