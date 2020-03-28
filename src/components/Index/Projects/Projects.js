import React from "react"
import {
  Wrapper,
  Header,
  ProjectList,
  Project,
  Image,
  Title,
  Description,
} from "./Projects.module"
import { Link } from "gatsby"

export const Projects = () => (
  <Wrapper>
    <Header>
      <h2>Projects</h2>
      <div>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles and companies I've
          dedicated my time to.
        </p>
        <Link>See all projects</Link>
      </div>
    </Header>

    <ProjectList>
      <Project>
        <Image></Image>
        <Title>
          <h3>Feather</h3>
        </Title>
        <Description>
          Simply beautiful open source icons designed with a focus on
          simplicity, consistency, and usability.
        </Description>
      </Project>
      <Project>
        <Image></Image>
        <Title>
          <h3>Tabio</h3>
        </Title>
        <Description>
          An open source tab manager made for tab hoarders like you.
        </Description>
      </Project>
      <Project>
        <Image></Image>
        <Title>
          <h3>Analog</h3>
        </Title>
        <Description>
          Replace your new tab page with a minimal analog clock.
        </Description>
      </Project>
    </ProjectList>
  </Wrapper>
)
