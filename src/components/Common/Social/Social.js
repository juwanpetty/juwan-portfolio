import React from "react"
import DribbbleIcon from "../../../assets/dribbble-icon.svg"
import GithubIcon from "../../../assets/github-icon.svg"
import InstagramIcon from "../../../assets/instagram-icon.svg"
import MediumIcon from "../../../assets/medium-icon.svg"
import TwitterIcon from "../../../assets/twitter-icon.svg"
import { Wrapper } from "./Social.module"

export const Social = () => (
  <Wrapper>
    <a href="https://dribbble.com/juwanpetty">
      <DribbbleIcon />
    </a>
    <a href="https://github.com/juwanpetty/">
      <GithubIcon />
    </a>
    <a href="https://www.instagram.com/juwanpetty/">
      <InstagramIcon />
    </a>
    <a href="https://medium.com/@juwanpetty">
      <MediumIcon />
    </a>
    <a href="https://twitter.com/juwanpetty">
      <TwitterIcon />
    </a>
  </Wrapper>
)
