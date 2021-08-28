import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BlogBottomSection from "../components/blogsModule/BlogBottomSection";
import BlogMiddleSection from "../components/blogsModule/BlogMiddleSection";
import BlogRelatedSection from "../components/blogsModule/BlogRelatedSection";
import BlogTopSection from "../components/blogsModule/BlogTopSection";

function Blog() {
  const [blog, setBlog] = useState(initialObject);
  let { blogId } = useParams();

  const fetchBlog = async () => {
    let res = await axios.get(`http://localhost:8000/blogs/${blogId}`);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);
  return (
    <div className="py-4 py-lg-8 pb-14 ">
      <div className="container">
        <div className="row justify-content-center">
          <BlogTopSection blog={blog} />
        </div>
        <div className="row justify-content-center"></div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-12 mb-2">
            <hr className="mt-8 mb-5" />
            <BlogMiddleSection blog={blog} />
            <BlogBottomSection blog={blog} />
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex align-items-center">
                <img
                  src={blog.author.thumbnail}
                  alt=""
                  className="rounded-circle avatar-md"
                />
                <div className="ms-2 lh-1">
                  <h5 className="mb-1 ">{blog.author.name}</h5>
                  <span className="text-primary">{blog.author.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogRelatedSection />
    </div>
  );
}

export default Blog;
const initialObject = {
  id: 0,
  title: "",
  time: "",
  description: "",
  author: {
    authorId: 0,
    thumbnail: "",
    role: "",
    name: "",
  },
  thumbnail: "",
  topSection: {
    articleTitle: "",
    paragraph: "",
    quote: "",
    quoteAuthor: "",
  },
  middleSection: {
    paragraph: "",
    unorderedListTitle: "",
    unorderedList: "",
    orderedListTitle: "",
    orderedList: "",
  },
  bottomSection: {
    title: "",
    firstParagraph: "",
    firstImage: "",
    secondParagraph: "",
    secondParagraphText: "",
    secondImage: "",
    thirdParagraph: "",
    thirdParagraphText: "",
    thirdImage: "",
    finalParagraph: "",
  },
};
