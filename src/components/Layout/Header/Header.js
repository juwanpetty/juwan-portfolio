import React from "react"
import { Link } from "gatsby"
import { FiSearch } from "react-icons/fi"
import { IoMdMoon } from "react-icons/io"
import {
  Wrapper,
  Navigation,
  LinkWrapper,
  IconContainer,
  activeStyle,
} from "./Header.module"

export const Header = () => (
  <Wrapper>
    <Navigation>
      <IconContainer>
        <FiSearch />
      </IconContainer>

      <LinkWrapper>
        <Link activeStyle={activeStyle} to="/">
          Home
        </Link>
        <Link activeStyle={activeStyle} to="/blog">
          Blog
        </Link>
        <a href="mailto:jchpetty@gmail.com">Contact</a>
      </LinkWrapper>

      <IconContainer>
        <IoMdMoon />
      </IconContainer>
    </Navigation>
  </Wrapper>
)
