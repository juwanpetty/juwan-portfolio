import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  PostList,
  Post,
  Title,
  Description,
  PostDate,
  Tag,
} from "./Posts.module"
import { TwoColumn, HeaderText, Paragraph, LinkText } from "../../Common"

export const Posts = () => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
        ) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                category
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <TwoColumn>
          <HeaderText>Recent posts</HeaderText>
          <div>
            <Paragraph>
              I enjoy taking some time to think about how we work, design and
              live, whenever possible. Here are some of my more recent stories
              and ideas I’ve published.
            </Paragraph>
            <LinkText to="/blog">See all posts</LinkText>
          </div>
        </TwoColumn>

        <PostList>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.id}>
              <Title to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Title>
              <PostDate>
                {node.frontmatter.date} -{" "}
                <Tag to={`/blog/${node.frontmatter.category.toLowerCase()}`}>
                  {node.frontmatter.category}
                </Tag>
              </PostDate>
              <Description>{node.excerpt}</Description>
            </Post>
          ))}
        </PostList>
      </Wrapper>
    )}
  />
)
