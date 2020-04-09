import styled from "styled-components"
import {
  typography,
  spacing,
  transition,
  breakpoint,
} from "../../../constants/styles"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 96px;
  grid-template-rows: auto auto;
  padding: 96px 0;
`

const TopFooter = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  & > :last-child {
    text-align: right;
  }
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const List = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${props => props.theme.gray9};
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};
    text-decoration: none;

    transition: ${transition.fast};

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  & > h4 {
    color: ${props => props.theme.black};
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin: 0 0 24px;

    transition: ${transition.fast};
  }
`

const IconContainer = styled.div`
  display: inline-block;
  padding: ${spacing.padding.xsmall}px ${spacing.padding.small}px;
  border-radius: ${spacing.borderRadius.medium}px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.black};
    transition: ${transition.fast};
  }
`

const Soon = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: ${props => props.theme.gray8};
  background: ${props => props.theme.gray7};
  padding: 4px 6px;
  font-weight: ${typography.weight.medium};
  border-radius: ${spacing.borderRadius.medium}px;
  margin-left: 8px;

  transition: ${transition.fast};

  @media (max-width: ${breakpoint.mobileMax}) {
    display: none;
  }
`

export { Wrapper, List, ListWrapper, TopFooter, IconContainer, Soon }
