import React from "react"
import { Wrapper, Title, ProfilePicture, Bio, Me } from "./Heading.module"
import { Social } from "../../Common"
import logo from "../../../images/juwan-icon.png"
import profilePicture from "../../../images/profile-picture.jpg"

export const Heading = () => (
  <Wrapper>
    <Bio>
      <div>
        <Me>
          <img src={logo} alt="Juwan Petty logo" />
          <div>
            <h3>Juwan Petty</h3>
            <p>Front End Developer</p>
          </div>
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
      <ProfilePicture>
        <img src={profilePicture} alt="Profile Picture" />
      </ProfilePicture>
    </Bio>
    <Social />
  </Wrapper>
)
