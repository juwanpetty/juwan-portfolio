import styled from "styled-components"
import { typography, color } from "../../../constants/styles"

export const Description = styled.p`
  color: ${color.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin: 0;
  margin-bottom: 96px;
  max-width: calc(850px / 1.25);

  a {
    text-decoration: none;
    color: ${color.black};
    font-size: ${typography.size.m1}rem;
    line-height: 1.25;
    font-weight: ${typography.weight.medium};

    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    border-color: currentColor;
  }
`
