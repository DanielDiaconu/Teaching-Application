import React from "react";

function BlogMiddleSection({ blog }) {
  return (
    <div>
      <div>
        <hr class="mt-lg-6 mb-lg-10 my-md-6" />
        <div class="mb-4">
          <p>{blog.topSection.articleTitle}</p>
          <p>{blog.topSection.paragraph}</p>
        </div>
        <div class="mb-5">
          <h3 class="mb-3">{blog.middleSection.unorderedListTitle}</h3>
          <ul>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>
              <ul>
                <li>{blog.middleSection.unorderedList}</li>
                <li>{blog.middleSection.unorderedList}</li>
                <li>{blog.middleSection.unorderedList}</li>
              </ul>
            </li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
            <li>{blog.middleSection.unorderedList}</li>
          </ul>
        </div>
        <div class="mb-5">
          <h3 class="mb-3">{blog.middleSection.orderedListTitle}</h3>
          <ol>
            <li>{blog.middleSection.orderedList}</li>
            <li>{blog.middleSection.orderedList}</li>
            <li>{blog.middleSection.orderedList}</li>

            <li>
              Nulla volutpat aliquam velit
              <ol>
                <li>{blog.middleSection.orderedList}</li>
                <li>{blog.middleSection.orderedList}</li>
                <li>{blog.middleSection.orderedList}</li>
              </ol>
            </li>
            <li>{blog.middleSection.orderedList}</li>
            <li>{blog.middleSection.orderedList}</li>
            <li>{blog.middleSection.orderedList}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BlogMiddleSection;
