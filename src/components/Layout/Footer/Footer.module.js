import styled from "styled-components"
import { typography, color } from "../../../constants/styles"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 96px;
  grid-template-rows: auto auto;
  padding: 96px 0;
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

const Social = styled.div`
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 24px;
    }

    svg {
      fill: ${color.gray9};
    }
  }
`

export { Wrapper, List, ListWrapper, Social }
