import styled from "styled-components"
import { Link } from "gatsby"
import { color, typography, spacing } from "../../../constants/styles"

const Wrapper = styled.header`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 64px;
  margin-bottom: 48px;
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

export { Wrapper, PostList, Post, Title, Description, PostDate, Tag }
