import React from "react"
import { Link } from "gatsby"
import DribbbleIcon from "../../../assets/dribbble-icon.svg"
import GithubIcon from "../../../assets/github-icon.svg"
import InstagramIcon from "../../../assets/instagram-icon.svg"
import MediumIcon from "../../../assets/medium-icon.svg"
import TwitterIcon from "../../../assets/twitter-icon.svg"
import { Wrapper, List, ListWrapper, Social } from "./Footer.module"

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
    <Social>
      <a href="www.google.com">
        <DribbbleIcon />
      </a>
      <a href="www.google.com">
        <GithubIcon />
      </a>
      <a href="www.google.com">
        <InstagramIcon />
      </a>
      <a href="www.google.com">
        <MediumIcon />
      </a>
      <a href="www.google.com">
        <TwitterIcon />
      </a>
    </Social>
  </Wrapper>
)
