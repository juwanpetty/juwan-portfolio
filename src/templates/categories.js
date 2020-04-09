import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { LinkText } from "../components/Common"
import { Content } from "../components/Layout"
import SEO from "../components/seo"
import { spacing, typography } from "../constants/styles"

const Header = styled.div`
  margin: 32px 0 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${props => props.theme.gray7};

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
  }
`

const Description = styled.div`
  color: ${props => props.theme.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  max-width: calc(850px / 1.5);
`

const PostDate = styled.div`
  color: ${props => props.theme.gray8};
  font-size: ${typography.size.s2}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 8px;
`

const Tag = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.gray8};
  border-bottom: 1px solid;
  border-bottom-color: currentcolor;
  border-color: currentColor;
`

const activeStyle = {
  fontWeight: `${typography.weight.medium}`,
  color: "#6ab0f3",
}

export default ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
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
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date } = node.frontmatter
          return (
            <Post key={slug}>
              <Title to={slug}>
                <h3>{title}</h3>
              </Title>
              <PostDate>
                {date} -{" "}
                <Tag to={`/blog/${category.toLowerCase()}`}>{category}</Tag>
              </PostDate>
              <Description>{node.excerpt}</Description>
            </Post>
          )
        })}
      </PostList>
    </Content>
  )
}

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
