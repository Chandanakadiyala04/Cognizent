import React from 'react';

const blogs = [
  { id: 1, title: "React Learning", author: "Stephen Biz" },
  { id: 2, title: "Installation", author: "Schewzdenier" },
];

const BlogDetails = () => {
  return (
    <>
      <h3><strong>Blog Details</strong></h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}><strong>{blog.title}</strong> by {blog.author}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogDetails;
