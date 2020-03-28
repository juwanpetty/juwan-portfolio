import React from "react"
import { Link } from "gatsby"
import { Wrapper, List, ListWrapper } from "./Footer.module"
import { Social } from "../../Common"

const LinkGroup = ({ header, children }) => (
  <List>
    <h4>{header}</h4>
    {children}
  </List>
)

export const Footer = () => (
  <Wrapper>
    <ListWrapper>
      <LinkGroup header="General">
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
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
    <Social />
  </Wrapper>
)
