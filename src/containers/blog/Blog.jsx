import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3-blog section-padding' id='blog'>
      <div className="container">
        <div className="heading">
          <h1 className="gradient-text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="blog-container">
          <div className="groupA">
            <Article imageURL = { blog01 } date = 'Sep 26, 2021' title = 'GPT-3 and Open AI is the future. Let us explorer how it is?' />
          </div>
          <div className="groupB">
            <Article imageURL = { blog02 } date = 'Sep 26, 2021' title = 'GPT-3 and Open AI is the future. Let us explorer how it is?' />
            <Article imageURL = { blog03 } date = 'Sep 26, 2021' title = 'GPT-3 and Open AI is the future. Let us explorer how it is?' />
            <Article imageURL = { blog04 } date = 'Sep 26, 2021' title = 'GPT-3 and Open AI is the future. Let us explorer how it is?' />
            <Article imageURL = { blog05 } date = 'Sep 26, 2021' title = 'GPT-3 and Open AI is the future. Let us explorer how it is?' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
