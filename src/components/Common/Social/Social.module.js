import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 24px;
    }

    svg {
      fill: ${props => props.theme.gray9};
    }
  }
`

export { Wrapper }
