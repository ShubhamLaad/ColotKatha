import React from 'react';
import './Blogs.scss'
import BLOGS from '../../json/BLOGS.json'

export default function Blogs(props) {
  return (
    <main className="container blogs-page">
      <h1>Blogs</h1>
      <ul className="blog-list">
        {BLOGS.map(blog => <li key={blog.heading}>
          <h3>{blog.heading}</h3>
          <p>{blog.description}</p>
        </li>)}
      </ul>
    </main>
  );
}

