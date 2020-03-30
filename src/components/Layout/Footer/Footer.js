import React from "react"
import { Link } from "gatsby"
import { FiArrowUp } from "react-icons/fi"
import {
  Wrapper,
  List,
  TopFooter,
  ListWrapper,
  IconContainer,
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
          <Link to="/blog">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </LinkGroup>
        <LinkGroup header="Extras">
          <Link to="/uses">Uses</Link>
          <Link to="/reading">Reading</Link>
        </LinkGroup>
        <LinkGroup header="Connect">
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/rss">RSS</Link>
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
