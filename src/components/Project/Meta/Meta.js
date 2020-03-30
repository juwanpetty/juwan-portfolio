import styled from "styled-components"
import { typography, color } from "../../../constants/styles"

export const Meta = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 96px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h3 {
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin: 0 0 24px;
  }

  li {
    color: ${color.gray9};
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  a {
    text-decoration: none;
    color: ${color.gray9};
    font-size: ${typography.size.m1}rem;
    line-height: 1.25;
    font-weight: ${typography.weight.regular};

    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    border-color: currentColor;
  }
`
