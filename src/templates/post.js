import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { typography } from "../constants/styles"
import "../constants/markdown-styles.css"

const Header = styled.div`
  margin: 32px 0 96px;

  & > div:first-child {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 24px;
    margin-bottom: 32px;
  }
`

const Title = styled.h1`
  font-size: ${typography.size.l1}rem;
  font-weight: ${typography.weight.medium};
  margin-bottom: 8px;
`

const Meta = styled.div`
  color: ${props => props.theme.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 16px;
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Content>
      <SEO title={post.frontmatter.title} />
      <Header>
        <Title>{post.frontmatter.title}</Title>
        <Meta>{post.frontmatter.date}</Meta>
      </Header>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Content>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
