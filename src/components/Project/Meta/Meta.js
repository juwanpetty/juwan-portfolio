import styled from "styled-components"
import { typography, breakpoint } from "../../../constants/styles"

export const Meta = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 96px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h3 {
    color: ${props => props.theme.black};
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin: 0 0 24px;
  }

  li {
    color: ${props => props.theme.gray9};
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.gray9};
    font-size: ${typography.size.m1}rem;
    line-height: 1.25;
    font-weight: ${typography.weight.regular};

    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    border-color: currentColor;
  }

  @media (max-width: ${breakpoint.mobileMax}) {
    grid-gap: 32px;
    /* grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); */

    margin-bottom: 96px;

    display: none;
  }
`
