import styled from "styled-components"
import { Paragraph as CommonParagraph } from "../../Common"
import { typography, color } from "../../../constants/styles"

export const Paragraph = styled(CommonParagraph)`
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
