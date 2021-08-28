import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/blogsModule/BlogCard";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    let res = await axios.get("http://localhost:8000/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div class="pb-8 my-10">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-12">
            <div class="card mb-4 shadow-lg">
              <div class="row g-0">
                <Link
                  to="/blog"
                  class="col-lg-8 col-md-12 col-12 bg-cover img-left-rounded"
                >
                  <img
                    src="../assets/images/blog/blogpost-2.jpg"
                    class="img-fluid d-lg-none invisible"
                    alt=""
                  />
                </Link>
                <div class="col-lg-4 col-md-12 col-12">
                  <div class="card-body">
                    <a href="#" class="fs-5 mb-3 fw-semi-bold d-block">
                      Courses
                    </a>
                    <h1 class="mb-2 mb-lg-4">
                      {" "}
                      <a href="blog-single.html" class="text-inherit">
                        Getting started the Web App JavaScript in 2020
                      </a>
                    </h1>
                    <p>
                      Our features, journey, tips and us being us. Lorem ipsum
                      dolor sit amet, accumsan in, tempor dictum neque.
                    </p>
                    <div class="row align-items-center g-0 mt-lg-7 mt-4">
                      <div class="col-auto">
                        <img
                          src="../assets/images/avatar/avatar-6.jpg"
                          alt=""
                          class="rounded-circle avatar-sm me-2"
                        />
                      </div>
                      <div class="col lh-1 ">
                        <h5 class="mb-1">Dustin Warren</h5>
                        <p class="fs-6 mb-0">September 13, 2020</p>
                      </div>
                      <div class="col-auto">
                        <p class="fs-6 mb-0">6 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {blogs && blogs.map((blog, i) => <BlogCard key={i} blog={blog} />)}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
