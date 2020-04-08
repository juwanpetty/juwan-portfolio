import styled from "styled-components"
import { color, typography } from "../../../constants/styles"

export const Paragraph = styled.p`
  color: ${color.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

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
