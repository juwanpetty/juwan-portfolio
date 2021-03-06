import React from "react"
import { Link } from "gatsby"
import { FiArrowUp } from "react-icons/fi"
import {
  Wrapper,
  List,
  TopFooter,
  ListWrapper,
  IconContainer,
  Soon,
} from "./Footer.module"
import { Social } from "../../Common"

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}

const LinkGroup = ({ header, children }) => (
  <List>
    <h4>{header}</h4>
    {children}
  </List>
)

export const Footer = () => (
  <Wrapper>
    <TopFooter>
      <ListWrapper>
        <LinkGroup header="General">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <a href="mailto:jchpetty@gmail.com">Contact</a>
        </LinkGroup>
        <LinkGroup header="Extras">
          <Link to="/">
            Uses <Soon>Coming Soon</Soon>
          </Link>
          <Link to="/">
            Reading <Soon>Coming Soon</Soon>
          </Link>
        </LinkGroup>
        <LinkGroup header="Connect">
          <Link to="/">
            RSS <Soon>Coming Soon</Soon>
          </Link>
        </LinkGroup>
      </ListWrapper>
      <div>
        <IconContainer onClick={() => scrollToTop()}>
          <FiArrowUp />
        </IconContainer>
      </div>
    </TopFooter>
    <Social />
  </Wrapper>
)
