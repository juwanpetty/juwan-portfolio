import styled from "styled-components"
import { typography, color, spacing } from "../../../constants/styles"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 96px;
  grid-template-rows: auto auto;
  padding: 96px 0;
`

const TopFooter = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  & > :last-child {
    text-align: right;
  }
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const List = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${color.gray9};
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  & > h4 {
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin: 0 0 24px;
  }
`

const IconContainer = styled.div`
  display: inline-block;
  padding: ${spacing.padding.xsmall}px ${spacing.padding.small}px;
  border-radius: ${spacing.borderRadius.medium}px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: ${color.black};
  }
`

export { Wrapper, List, ListWrapper, TopFooter, IconContainer }
