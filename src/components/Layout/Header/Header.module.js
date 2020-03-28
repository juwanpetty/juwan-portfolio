import styled from "styled-components"
import { color, typography, spacing } from "../../../constants/styles"

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
    color: ${color.gray9};
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
  border-radius: ${spacing.borderRadius.small}px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: ${color.gray9};
  }

  &:hover {
    background: ${color.gray7};
  }
`

const activeStyle = {
  fontWeight: `${typography.weight.medium}`,
  color: `${color.black}`,
}

export { Wrapper, Navigation, LinkWrapper, IconContainer, activeStyle }
