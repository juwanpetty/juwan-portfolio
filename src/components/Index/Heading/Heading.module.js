import styled from "styled-components"
import { color, typography, spacing } from "../../../constants/styles"

const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 48px;
  padding-bottom: ${spacing.padding.large}px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${color.gray7};
  }
`

const Bio = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 96px;
`

const Me = styled.div`
  h3 {
    font-size: ${typography.size.m2}rem;
    line-height: 18px;
    font-weight: ${typography.weight.medium};
    color: ${color.black};
    margin: 0;
    margin-bottom: 4px;
  }

  p {
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.regular};
    color: ${color.gray9};
    margin: 0;
    margin-bottom: 32px;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 48px;
  color: ${color.black};
  font-size: ${typography.size.l1}rem;
  font-weight: ${typography.weight.medium};
  line-height: 1.25;

  font-size: 18px;
  line-height: 155%;
  font-weight: 700;

  a {
    color: ${color.black};
    text-decoration: none;
    border-bottom: 1px solid ${color.black};
  }
`

const Social = styled.div`
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

const ProfilePicture = styled.div`
  background: #eee;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Wrapper, Social, Title, ProfilePicture, Bio, Me }
