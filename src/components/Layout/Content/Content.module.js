import styled from "styled-components"
import { spacing, transition } from "../../../constants/styles"

const Container = styled.div`
  background: ${props => props.theme.white};
  width: 100%;
  transition: ${transition.fast};
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 850px;
  padding: 0 ${spacing.padding.xmedium}px;

  /* styles for sticky footer */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  /* styles for sticky footer */
  flex-grow: 1;
`

export { Wrapper, ContentWrapper, Container }
