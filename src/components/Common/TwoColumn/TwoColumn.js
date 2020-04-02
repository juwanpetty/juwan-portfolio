import styled from "styled-components"
import { breakpoint } from "../../../constants/styles"

export const TwoColumn = styled.div`
  display: grid;
  grid-gap: 72px;
  grid-template-columns: 1fr 3fr;

  @media (max-width: ${breakpoint.mobileMin}) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`
