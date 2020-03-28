import React from "react"
import { Wrapper, Title, ProfilePicture, Bio, Me } from "./Heading.module"
import { Social } from "../../Common"

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
    <Social />
  </Wrapper>
)
