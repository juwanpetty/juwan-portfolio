import styled from "styled-components"
import { Link } from "gatsby"
import { typography, spacing, transition } from "../../../constants/styles"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 64px;
  margin-bottom: 128px;
`

const ProjectList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

const Project = styled.li`
  margin: 0;
  padding: 0;
`

const Image = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 240px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${spacing.borderRadius.large}px;
  }
`

const Title = styled(Link)`
  text-decoration: none;

  h3 {
    color: ${props => props.theme.black};
    display: inline-block;
    font-size: ${typography.size.m2}rem;
    line-height: 1.25;
    font-weight: ${typography.weight.medium};
    margin: 0;
    margin-bottom: 16px;

    border-bottom: 1px solid;
    border-bottom-color: currentcolor;
    border-color: currentColor;

    transition: ${transition.fast};
  }
`

const Description = styled.div`
  color: ${props => props.theme.gray9};
  font-size: ${typography.size.m1}rem;
  line-height: 1.5;
  font-weight: ${typography.weight.regular};

  transition: ${transition.fast};
`

export { Wrapper, ProjectList, Project, Image, Title, Description }
