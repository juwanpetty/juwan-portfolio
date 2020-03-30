import React from "react"
import {
  Wrapper,
  ProjectList,
  Project,
  Image,
  Title,
  Description,
} from "./Projects.module"
import { HeaderText, Paragraph, LinkText, OneColumn } from "../../Common/"

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
        <Image to="/project"></Image>
        <Title to="/project">
          <h3>Feather</h3>
        </Title>
        <Description>
          Simply beautiful open source icons designed with a focus on
          simplicity, consistency, and usability.
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
