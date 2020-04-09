import React from "react"
import {
  Wrapper,
  ProjectList,
  Project,
  Image,
  Title,
  Description,
} from "./Projects.module"
import { HeaderText, Paragraph, OneColumn } from "../../Common/"
import headlinesLogo from "../../../images/headlines-logo.png"
import pipLogo from "../../../images/pip-logo.png"

export const Projects = () => (
  <Wrapper>
    <OneColumn>
      <HeaderText>Latest work</HeaderText>
      <div>
        <Paragraph>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles and companies I've
          dedicated my time to.
        </Paragraph>
      </div>
    </OneColumn>

    <ProjectList>
      <Project>
        <Image to="/headlines">
          <img src={headlinesLogo} alt="Headlines project logo" />
        </Image>
        <Title to="/headlines">
          <h3>Headlines</h3>
        </Title>
        <Description>
          A browser extension built to deliver 50+ news sources to your new tab
          page.
        </Description>
      </Project>
      <Project>
        <Image to="/picture-in-picture">
          <img src={pipLogo} alt="Picture-in-Picture logo" />
        </Image>
        <Title to="/picture-in-picture">
          <h3>Picture in Picture for Chrome</h3>
        </Title>
        <Description>
          A browser extension that lets you watch videos in a popup window
          (always on top of other windows).
        </Description>
      </Project>
    </ProjectList>
  </Wrapper>
)
