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

export const Header = ({ handleIsDarkMode, isDarkMode }) => {
  const onUpdateIsDarkMode = () => {
    handleIsDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", !isDarkMode)
  }

  return (
    <Wrapper>
      <Navigation>
        <IconContainer>
          <FiSearch />
        </IconContainer>

        <LinkWrapper>
          <Link activeStyle={activeStyle} to="/">
            Home
          </Link>
          <Link activeStyle={activeStyle} to="/blog" partiallyActive={true}>
            Blog
          </Link>
          <a href="mailto:jchpetty@gmail.com">Contact</a>
        </LinkWrapper>

        <IconContainer onClick={() => onUpdateIsDarkMode()}>
          <IoMdMoon />
        </IconContainer>
      </Navigation>
    </Wrapper>
  )
}
