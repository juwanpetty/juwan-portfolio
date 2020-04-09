import styled from "styled-components"
import { typography, spacing } from "../../../constants/styles"

const Wrapper = styled.header`
  margin: 0 auto;
  width: 100%;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Navigation = styled.nav`
  display: flex;
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 32px;

  a {
    display: inline-block;
    padding: 0;
    color: ${props => props.theme.gray9};
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`

const IconContainer = styled.div`
  padding: ${spacing.padding.xsmall}px ${spacing.padding.small}px;
  border-radius: ${spacing.borderRadius.medium}px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme.gray9};
  }

  &:hover {
    background: ${props => props.theme.gray7};
  }

  &:last-child {
    svg {
      color: ${props => props.theme.gray9};
    }
  }
`

const activeStyle = {
  fontWeight: `${typography.weight.medium}`,
  color: "#6ab0f3",
}

export { Wrapper, Navigation, LinkWrapper, IconContainer, activeStyle }
