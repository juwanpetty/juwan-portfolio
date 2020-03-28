import React from "react"
import DribbbleIcon from "../../../assets/dribbble-icon.svg"
import GithubIcon from "../../../assets/github-icon.svg"
import InstagramIcon from "../../../assets/instagram-icon.svg"
import MediumIcon from "../../../assets/medium-icon.svg"
import TwitterIcon from "../../../assets/twitter-icon.svg"
import {
  Wrapper,
  Social,
  Title,
  ProfilePicture,
  Bio,
  Me,
} from "./Heading.module"

export const Heading = () => (
  <Wrapper>
    <Bio>
      <div>
        <Me>
          <h3>Juwan Petty</h3>
          <p>Front End Developer</p>
        </Me>
        <Title>
          Currently a Front End Developer at{" "}
          <a href="https://www.shopify.com/">Shopify</a> and a student in my
          final year of studying Interactive Design at{" "}
          <a href="https://www.kennesaw.edu/">Kennesaw State University</a>.
          <br />
          <br />
          Don't be shy, <a href="mailto:jchpetty@gmail.com">say hello</a> 👋.
        </Title>
      </div>
      <ProfilePicture />
    </Bio>

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
