import styled from "styled-components"
import { spacing } from "../../../constants/styles"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 850px;
  padding: ${spacing.padding.xmedium}px;

  /* styles for sticky footer */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  /* styles for sticky footer */
  flex-grow: 1;
`

export { Wrapper, ContentWrapper }
