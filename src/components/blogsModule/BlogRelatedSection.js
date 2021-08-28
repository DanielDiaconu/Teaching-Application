import React, { useEffect, useState } from "react";
import BlogRelatedCard from "./BlogRelatedCard";

function BlogRelatedSection() {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const fetchBlogs = async () => {
    let res = await fetch("http://localhost:8000/blogs");
    let data = await res.json();
    const related = data.filter((blog) => blog.related === true);
    setRelatedBlogs(related);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="my-5">
              <h2>Related Post</h2>
            </div>
          </div>
          {relatedBlogs &&
            relatedBlogs.map((blog, i) => (
              <BlogRelatedCard key={i} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BlogRelatedSection;
