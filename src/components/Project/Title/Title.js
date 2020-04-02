import styled from "styled-components"
import { typography, breakpoint } from "../../../constants/styles"

export const Title = styled.h1`
  font-size: ${typography.size.l3}rem;
  margin: 96px 0 16px;

  @media (max-width: ${breakpoint.mobileMax}) {
    font-size: ${typography.size.l2}rem;
  }

  @media (max-width: ${breakpoint.mobileMin}) {
    font-size: ${typography.size.l1}rem;
  }
`
