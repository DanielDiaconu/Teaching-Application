import React from "react";
import CourseCard from "../components/CourseCard";
import Hero from "../images/hero/hero.png";

function Home() {
  return (
    <div>
      <div class="bg-primary">
        <div class="container">
          <div class="row align-items-center g-0">
            <div class="col-xl-5 col-lg-6 col-md-12">
              <div class="py-5 py-lg-0">
                <h1 class="text-white display-4 fw-bold">
                  Welcome to Geeks UI Learning Application
                </h1>
                <p class="text-white-50 mb-4 lead">
                  Hand-picked Instructor and expertly crafted courses, designed
                  for the modern students and entrepreneur.
                </p>
                <a href="pages/course-filter-list.html" class="btn btn-success">
                  Browse Courses
                </a>
                <a href="pages/sign-in.html" class="btn btn-white">
                  Are You Instructor?
                </a>
              </div>
            </div>
            <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
              <img src={Hero} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white py-4 shadow-sm">
        <div class="container">
          <div class="row align-items-center g-0">
            <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div class="d-flex align-items-center">
                <span class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i class="fe fe-video"> </i>
                </span>
                <div class="ms-3">
                  <h4 class="mb-0 fw-semi-bold">30,000 online courses</h4>
                  <p class="mb-0">Enjoy a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
              <div class="d-flex align-items-center">
                <span class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i class="fe fe-users"> </i>
                </span>
                <div class="ms-3">
                  <h4 class="mb-0 fw-semi-bold">Expert instruction</h4>
                  <p class="mb-0">Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12">
              <div class="d-flex align-items-center">
                <span class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4 ">
                  {" "}
                  <i class="fe fe-clock"> </i>
                </span>
                <div class="ms-3">
                  <h4 class="mb-0 fw-semi-bold">Lifetime access</h4>
                  <p class="mb-0">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <div class="container">
          <div class="row mb-4">
            <div class="col">
              <h2 class="mb-0">Recommended to you</h2>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center home-course-cards">
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
      <div class="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <div class="container">
          <div class="row mb-4">
            <div class="col">
              <h2 class="mb-0">Trending</h2>
            </div>
          </div>
          <div class="position-relative d-flex align-items-center home-course-cards">
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
