import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import BlogCard from '../components/BlogCard'

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {data.allDevArticles.edges.map((node, key) => (
      <BlogCard
        key={key}
        post={{
          ...node.node.article,
          tag_list_array: node.node.article.tag_list.split(',').map(tag => tag.trim()),
        }}
      />
    ))}
  </Layout>
)

export default BlogPage

export const query = graphql`
  query BlogPageQuery {
    allDevArticles (
      sort: {
        fields: [article___published_at],
        order: DESC
      }
    ) {
      edges {
        node {
          article {
            id
            path
            title
            slug
            tag_list
            readable_publish_date
            published_at
            positive_reactions_count
            comments_count
            social_image
          }
        }
      }
    }
  }
`