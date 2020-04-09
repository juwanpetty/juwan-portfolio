import styled from "styled-components"
import { Link } from "gatsby"
import { typography } from "../../../constants/styles"

export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: ${typography.size.m1}rem;
  line-height: 1.25;
  font-weight: ${typography.weight.medium};

  border-bottom: 1px solid;
  border-bottom-color: currentcolor;
  border-color: currentColor;
`
