import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const minutes = Math.floor(blog.time / 60);
  return (
    <>
      <div class="col-xl-4 col-lg-4 col-md-6 col-12">
        <div class="card mb-4 shadow-lg">
          <Link to={`/blog/${blog.id}`} class="card-img-top">
            <img
              src={blog.thumbnail}
              class="card-img-top rounded-top-md"
              alt=""
            />
          </Link>
          <div class="card-body">
            <a href="#" class="fs-5 mb-2 fw-semi-bold d-block text-success">
              Courses
            </a>
            <h3>
              <a href="blog-single.html" class="text-inherit">
                {blog.title}
              </a>
            </h3>
            <p>{blog.description}</p>
            <div class="row align-items-center g-0 mt-4">
              <div class="col-auto">
                <img
                  src={blog.author.thumbnail}
                  alt=""
                  class="rounded-circle avatar-sm me-2"
                />
              </div>
              <div class="col lh-1">
                <h5 class="mb-1">{blog.author.name}</h5>
                <p class="fs-6 mb-0">September 05, 2020</p>
              </div>
              <div class="col-auto">
                <p class="fs-6 mb-0">{minutes} Min Read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
