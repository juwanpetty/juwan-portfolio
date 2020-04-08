import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { spacing, color, typography } from "../constants/styles"
import { Link } from "gatsby"
import styled from "styled-components"
import { LinkText } from "../components/Common"

const Header = styled.div`
  margin: 32px 0 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid ${color.gray7};

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
    border-bottom-color: ${color.gray7};
    border-color: ${color.gray7};
    margin-bottom: ${spacing.padding.medium}px;
  }
`

const Title = styled(Link)`
  text-decoration: none;

  h3 {
    color: ${color.black};
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
  color: ${color.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  max-width: calc(850px / 1.5);
`

const PostDate = styled.div`
  color: ${color.gray8};
  font-size: ${typography.size.s2}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin-bottom: 8px;
`

const Tag = styled(Link)`
  text-decoration: none;
  color: ${color.gray8};
  border-bottom: 1px solid;
  border-bottom-color: currentcolor;
  border-color: currentColor;
`

const BlogPage = () => (
  <Content>
    <SEO title="Blog" />
    <Header>
      <LinkText to="/blog">All</LinkText>
      <LinkText to="/blog">Design</LinkText>
      <LinkText to="/blog">Development</LinkText>
      <LinkText to="/blog">Journal</LinkText>
    </Header>
    <PostList>
      <Post>
        <Title to="/post">
          <h3>Understanding Generators in JavaScript</h3>
        </Title>
        <PostDate>
          March 2020 - <Tag>Development</Tag>
        </PostDate>
        <Description>
          A leader can be the head of a household, the head of a classroom, the
          head of company, and yes, the head of a country.
        </Description>
      </Post>
      <Post>
        <Title to="/post">
          <h3>
            macOS Catalina 10.15: Setting up a Brand New Mac for Development
          </h3>
        </Title>
        <PostDate>
          March 2020 - <Tag>Development</Tag>
        </PostDate>
        <Description>
          A leader can be the head of a household, the head of a classroom, the
          head of company, and yes, the head of a country.
        </Description>
      </Post>
      <Post>
        <Title to="/post">
          <h3>Understanding Map and Set in JavaScript</h3>
        </Title>
        <PostDate>
          March 2020 - <Tag>Development</Tag>
        </PostDate>
        <Description>
          A leader can be the head of a household, the head of a classroom, the
          head of company, and yes, the head of a country.
        </Description>
      </Post>
      <Post>
        <Title to="/post">
          <h3>Understanding Generators in JavaScript</h3>
        </Title>
        <PostDate>
          March 2020 - <Tag>Development</Tag>
        </PostDate>
        <Description>
          A leader can be the head of a household, the head of a classroom, the
          head of company, and yes, the head of a country.
        </Description>
      </Post>
      <Post>
        <Title to="/post">
          <h3>
            macOS Catalina 10.15: Setting up a Brand New Mac for Development
          </h3>
        </Title>
        <PostDate>
          March 2020 - <Tag>Development</Tag>
        </PostDate>
        <Description>
          A leader can be the head of a household, the head of a classroom, the
          head of company, and yes, the head of a country.
        </Description>
      </Post>
    </PostList>
  </Content>
)

export default BlogPage
