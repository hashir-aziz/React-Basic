import React from "react";
import { Navbar } from "./Navbar";
import { BlogInfo } from "./BlogInfo";
export const Blogs = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="blogCenter">
        <p className="Blogs">Blog</p>
        <BlogInfo />

        <BlogInfo title={" hdjkshxlasj "} />
        <BlogInfo />
        <BlogInfo />
      </div>
    </>
  );
};

export default Blogs;
