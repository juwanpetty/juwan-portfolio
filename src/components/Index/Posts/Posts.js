import React from "react"
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
  <Wrapper>
    <TwoColumn>
      <HeaderText>Recent posts</HeaderText>
      <div>
        <Paragraph>
          I enjoy taking some time to think about how we work, design and live,
          whenever possible. Here are some of my more recent stories and ideas
          I’ve published.
        </Paragraph>
        <LinkText>See all posts</LinkText>
      </div>
    </TwoColumn>

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
    </PostList>
  </Wrapper>
)
