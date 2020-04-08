import React from "react"
import { graphql } from "gatsby"
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

export const Posts = ({ data }) => {
  console.log({ data })

  return (
    <Wrapper>
      <TwoColumn>
        <HeaderText>Recent posts</HeaderText>
        <div>
          <Paragraph>
            I enjoy taking some time to think about how we work, design and
            live, whenever possible. Here are some of my more recent stories and
            ideas I’ve published.
          </Paragraph>
          <LinkText to="/blog">See all posts</LinkText>
        </div>
      </TwoColumn>

      <PostList>
        <Post>
          <Title to="/blog">
            <h3>Understanding Generators in JavaScript</h3>
          </Title>
          <PostDate>
            March 2020 - <Tag>Development</Tag>
          </PostDate>
          <Description>
            A leader can be the head of a household, the head of a classroom,
            the head of company, and yes, the head of a country.
          </Description>
        </Post>
        {/* {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.id}>
          <Title to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Title>
          <PostDate>
            {node.frontmatter.date} - <Tag>Development</Tag>
          </PostDate>
          <Description>{node.excerpt}</Description>
        </Post>
      ))} */}
      </PostList>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
