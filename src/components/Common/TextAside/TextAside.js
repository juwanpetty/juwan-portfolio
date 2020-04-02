import styled from "styled-components"
import { breakpoint } from "../../../constants/styles"

export const TextAside = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: 1fr 1fr;

  img {
    margin: 0;
    align-self: center;
  }

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoint.mobileMax}) {
    grid-template-columns: 1fr;

    img {
      width: 60%;
      margin: 0 auto;
    }
  }
`
