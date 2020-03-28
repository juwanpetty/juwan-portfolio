import styled from "styled-components"
import { Link } from "gatsby"
import { color, typography } from "../../../constants/styles"

export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${color.black};
  font-size: ${typography.size.m1}rem;
  line-height: 1.25;
  font-weight: ${typography.weight.medium};

  border-bottom: 1px solid;
  border-bottom-color: currentcolor;
  border-color: currentColor;
`
