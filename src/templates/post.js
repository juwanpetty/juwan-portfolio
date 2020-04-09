import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { typography } from "../constants/styles"

const Header = styled.div`
  margin: 32px 0 96px;

  & > div:first-child {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 24px;
    margin-bottom: 32px;
  }
`
const PostImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: #eee;
`

const Title = styled.div`
  font-size: ${typography.size.l1}rem;
  font-weight: ${typography.weight.medium};
`

const Meta = styled.div`
  color: ${props => props.theme.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 16px;
`

const Main = styled.div`
  h2 {
    padding-bottom: 4px;
    margin-bottom: 20px;
    font-weight: ${typography.weight.medium};
    font-size: ${typography.size.m3}rem;
    border-bottom: 1px solid ${props => props.theme.gray7};
  }
`

const MarkdownContent = styled.div`
  font-size: 100% !important;
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Content>
      <SEO title={post.frontmatter.title} />
      <Header>
        <div>
          <PostImage></PostImage>
          <Title>{post.frontmatter.title}</Title>
        </div>
        <Meta>{post.frontmatter.date} / Share / Edit</Meta>
      </Header>
      <Main>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Main>
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
