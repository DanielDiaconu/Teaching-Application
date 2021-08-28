import React from "react";

function BlogTopSection({ blog }) {
  const minutes = Math.floor(blog.time / 60);
  return (
    <>
      <div class="col-xl-8 col-lg-8 col-md-12 col-12 mb-2">
        <div class="text-center mb-4">
          <a href="#" class="fs-5 fw-semi-bold d-block mb-4 text-primary">
            Courses
          </a>
          <h1 class="display-3 fw-bold mb-4">{blog.title}</h1>
          <span class="mb-3 d-inline-block">{minutes} min read</span>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-5">
          <div class="d-flex align-items-center">
            <img
              src={blog.author.thumbnail}
              alt=""
              class="rounded-circle avatar-md"
            />
            <div class="ms-2 lh-1">
              <h5 class="mb-1 ">{blog.author.name}</h5>
              <span class="text-primary">{blog.author.role}</span>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-lg-10 col-md-12 col-12 mb-6">
          <img src={blog.thumbnail} alt="" class="img-fluid rounded-3" />
        </div>
        <div class="mb-4">
          <p class="lead text-dark"> {blog.topSection.articleTitle} </p>
          <p>{blog.topSection.paragraph}</p>
          <p>
            {blog.topSection.paragraph}
            <span class="border-bottom border-danger">
              duimetus ullamcorper faucibuse blandit
            </span>
            sedtincinean.
          </p>
        </div>
        <hr class="mt-lg-10 mb-lg-6 my-md-6" />
        <blockquote class="blockquote text-center ">
          <p class="text-primary font-italic fw-semi-bold lh-lg h1 px-2 px-lg-14">
            "{blog.topSection.quote}"
          </p>
          <footer class="blockquote-footer mt-3 text-muted">
            <cite title="Source Title">{blog.topSection.quoteAuthor}</cite>
          </footer>
        </blockquote>
      </div>
    </>
  );
}

export default BlogTopSection;
