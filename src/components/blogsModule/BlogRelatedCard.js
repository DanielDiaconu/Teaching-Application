import React from "react";

function BlogRelatedCard({ blog }) {
  const minutes = Math.floor(blog.time / 60);
  return (
    <>
      <div class="col-xl-4 col-lg-4 col-md-6 col-12">
        <div class="card mb-4 shadow-lg ">
          <a href="blog-single.html" class="card-img-top">
            <img
              src={blog.thumbnail}
              class="card-img-top rounded-top-md"
              alt=""
            />
          </a>
          <div class="card-body">
            <a href="#" class="fs-5 fw-semi-bold d-block mb-3 text-primary">
              Workshop
            </a>
            <a href="blog-single.html">
              <h3>{blog.title}</h3>
            </a>
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
                <p class="fs-6 mb-0">September 09, 2020</p>
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

export default BlogRelatedCard;
