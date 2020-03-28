import styled from "styled-components"
import { color } from "../../../constants/styles"

const Wrapper = styled.div`
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 24px;
    }

    svg {
      fill: ${color.gray9};
    }
  }
`

export { Wrapper }
