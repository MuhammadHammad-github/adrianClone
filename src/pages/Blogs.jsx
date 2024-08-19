import React from "react";
import Hero from "../components/Hero";
import BlogCard from "./BlogsComponents/BlogCard";
import MyPagination from "./BlogsComponents/MyPagination";

const Blogs = () => {
  return (
    <div>
      <Hero heading={"Latest News"} path={"Latest News"} />
      <div className="respPx20 grid 750px:grid-cols-2 grid-cols-1 gap-8 my-20">
        <BlogCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/blog/blog-post-1.jpg"
          }
        />
        <BlogCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/blog/blog-post-2.jpg"
          }
        />
        <BlogCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/blog/blog-post-3.jpg"
          }
        />
        <BlogCard
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/blog/blog-post-4.jpg"
          }
        />
      </div>
      <MyPagination />
    </div>
  );
};

export default Blogs;
