import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { spacing, typography, transition } from "../constants/styles"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { LinkText } from "../components/Common"

const Header = styled.div`
  margin: 32px 0 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${props => props.theme.gray7};
  transition: ${transition.fast};

  a {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`

const PostList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Post = styled.li`
  margin: 0;
  padding: 0;
  padding-bottom: ${spacing.padding.medium}px;
  transition: ${transition.fast};

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.gray7};
    border-color: ${props => props.theme.gray7};
    margin-bottom: ${spacing.padding.medium}px;
  }
`

const Title = styled(Link)`
  text-decoration: none;

  h3 {
    color: ${props => props.theme.black};
    display: inline-block;
    font-size: ${typography.size.m2}rem;
    line-height: 1.25;
    font-weight: ${typography.weight.medium};
    margin: 0;
    margin-bottom: 8px;

    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    border-color: currentColor;

    transition: ${transition.fast};
  }
`

const Description = styled.div`
  color: ${props => props.theme.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  max-width: calc(850px / 1.5);

  transition: ${transition.fast};
`

const PostDate = styled.div`
  color: ${props => props.theme.gray8};
  font-size: ${typography.size.s2}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 8px;

  transition: ${transition.fast};
`

const Tag = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.gray8};
  border-bottom: 1px solid;
  border-bottom-color: currentcolor;
  border-color: currentColor;

  transition: ${transition.fast};
`

const activeStyle = {
  fontWeight: `${typography.weight.medium}`,
  color: "#6ab0f3",
}

export default ({ data }) => (
  <Content>
    <SEO title="Blog" />
    <Header>
      <LinkText activeStyle={activeStyle} to="/blog">
        All
      </LinkText>
      <LinkText activeStyle={activeStyle} to="/blog/design">
        Design
      </LinkText>
      <LinkText activeStyle={activeStyle} to="/blog/development">
        Development
      </LinkText>
      <LinkText activeStyle={activeStyle} to="/blog/journal">
        Journal
      </LinkText>
    </Header>
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
  </Content>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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
`
