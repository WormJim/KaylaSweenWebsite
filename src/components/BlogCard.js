import React from 'react'
import { Link } from "gatsby"

// import styled from '@emotion/styled'

import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './blogCard.css'


const BlogCard = ({ post }) => (
  <Card className="blog-card"> 
    {/* <Card.Img variant="top" src={post.social_image} alt={"Links to Kayla's post" + post.title + " on the Dev Community"} /> */}
      <Card.Title>
        <a href={'https://dev.to/kaylasween/' + post.slug}>
          <h3>{post.title}</h3>
        </a>
      </Card.Title>
      <Card.Subtitle>
        Published on {post.readable_publish_date} 
      </Card.Subtitle>
      <Card.Link className="tags">
        {post.tag_list_array.map((tag, key) => (
          <a key={key} href={'https://dev.to/t/' + tag}>
            <span className="tag">{`#${tag}`}</span>
          </a>
        ))}
      </Card.Link>
  </Card>
)

export default BlogCard