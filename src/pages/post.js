import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { typography, color, spacing } from "../constants/styles"
import { Link } from "gatsby"
import { Paragraph } from "../components/Common"

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
  color: ${color.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 16px;
`

const TagsList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Tag = styled(Link)`
  color: ${color.black};
  font-size: ${typography.size.s1}rem;
  text-decoration: none;
  background: ${color.gray7};
  padding: 8px 12px;
  border-radius: ${spacing.borderRadius.medium}px;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

const Main = styled.div`
  h2 {
    padding-bottom: 4px;
    margin-bottom: 20px;
    font-weight: ${typography.weight.medium};
    font-size: ${typography.size.m3}rem;
    border-bottom: 1px solid ${color.gray7};
  }
`

const BlogPage = () => (
  <Content>
    <SEO title="Blog" />
    <Header>
      <div>
        <PostImage></PostImage>
        <Title>Understanding Default Parameters in Javascript</Title>
      </div>
      <Meta>March 31st, 2020 / Share / Edit</Meta>
      <TagsList>
        <Tag>javascript</Tag>
        <Tag>fundamentals</Tag>
      </TagsList>
    </Header>
    <Main>
      <h2>Arguments and Parameters</h2>
      <Paragraph>
        Before explaining default function parameters, it is important to know
        what it is that parameters can default to. Because of this, we will
        first review the difference between arguments and parameters in a
        function. If you would like to learn more about this distinction, check
        out our earlier article in the{" "}
        <a href="www.google.com">
          JavaScript series, How to Define Functions in JavaScript
        </a>
        .
      </Paragraph>
    </Main>
  </Content>
)

export default BlogPage
