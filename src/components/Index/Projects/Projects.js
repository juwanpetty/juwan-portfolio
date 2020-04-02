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
        <Image to="/headlines"></Image>
        <Title to="/headlines">
          <h3>Headlines</h3>
        </Title>
        <Description>
          A browser extension built to deliver 50+ news sources to your new tab
          page.
        </Description>
      </Project>
      <Project>
        <Image to="/project"></Image>
        <Title to="/project">
          <h3>Tabio</h3>
        </Title>
        <Description>
          An open source tab manager made for tab hoarders like you.
        </Description>
      </Project>
      <Project>
        <Image to="/project"></Image>
        <Title to="/project">
          <h3>Analog</h3>
        </Title>
        <Description>
          Replace your new tab page with a minimal analog clock.
        </Description>
      </Project>
    </ProjectList>
  </Wrapper>
)
