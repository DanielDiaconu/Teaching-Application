import React from "react";

function BlogBottomSection({ blog }) {
  return (
    <div>
      <div class="mb-5">
        <h2 class="mb-2">{blog.bottomSection.title}</h2>
        <p>{blog.bottomSection.firstParagraph}</p>
        <img
          src={blog.bottomSection.firstImage}
          alt=""
          class="img-fluid rounded-3 mb-2 mt-3 w-100"
        />
        <span>The image above happens to be centered.</span>
        <div class="d-flex align-items-start mt-4">
          <img
            src={blog.bottomSection.secondImage}
            alt=""
            class="img-fluid me-4 rounded-3 d-none d-lg-block d-md-block"
          />
          <div>
            <p>{blog.bottomSection.secondParagraph}</p>
            <p>{blog.bottomSection.secondParagraphText}</p>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <p>{blog.bottomSection.thirdParagraph}</p>
      </div>
      <div class="mb-4">
        <div class="d-flex align-items-start">
          <div>
            <p>{blog.bottomSection.thirdParagraphText}</p>
            <p>
              And now we’re going to shift things to the right align. Again,
              there should be plenty of room above, below, and to the left of
              the image. Just look at him there… Hey guy! Way to rock that right
              side. I don’t care what the left aligned image says, you look
              great. Don’t let anyone else tell you differently.
            </p>
          </div>
          <img
            src={blog.bottomSection.thirdImage}
            alt=" "
            class="img-fluid ms-4 rounded-3  d-none d-lg-block d-md-block"
          />
        </div>
      </div>
      <div class="mb-4 ">
        <p class="mb-0">{blog.bottomSection.finalParagraph}</p>
      </div>
    </div>
  );
}

export default BlogBottomSection;
