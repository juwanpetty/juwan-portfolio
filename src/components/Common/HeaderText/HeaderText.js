import styled from "styled-components"
import { typography } from "../../../constants/styles"

export const HeaderText = styled.h2`
  color: ${props => props.theme.black};
  font-size: ${typography.size.m3}rem;
  line-height: 1.25;
  font-weight: ${typography.weight.bold};
  margin: 0;
`
