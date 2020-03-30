import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { Meta, Title, Description, Paragraph } from "../components/Project"
import {
  Image,
  OneColumn,
  TwoColumn,
  TextAside,
  HeaderText,
} from "../components/Common/"

import components from "../images/design-components.jpg"
import components1 from "../images/design-components-2.jpg"

const Project = () => (
  <Content>
    <SEO title="Project" />
    <Title>Decore</Title>
    <Description>
      Decore is a project I built alongside{" "}
      <a href="www.google.com">Ian Trent</a> for a class project. We decided to
      create a react web application that would help other developers get
      started with their web projects. Decore allows users to customize a layout
      setup that will generate custom html and css code that can be used as a
      starter template for any website.
    </Description>

    <Meta>
      <ul>
        <h3>Role</h3>
        <li>Product Designer</li>
      </ul>
      <ul>
        <h3>Stack</h3>
        <li>Styled-Components</li>
        <li>Shopify</li>
        <li>Netlify</li>
      </ul>
      <ul>
        <h3>Completed</h3>
        <li>November 2019</li>
      </ul>
      <ul>
        <h3>Check it out</h3>
        <li>
          <a href="www.google.com">View Site</a>
        </li>
        <li>
          <a href="www.google.com">Repository</a>
        </li>
      </ul>
    </Meta>

    <Image src={components} alt="Forecast Application Work in Progress" />

    <OneColumn style={{ marginBottom: "48px" }}>
      <HeaderText>Project Purpose and Goal</HeaderText>
      <Paragraph>
        We built this project because we know how tedious and repetitive
        starting a new project from scratch can be, and we wanted to build
        something that we would also use ourselves.
        <br />
        <br />
        We had a timeframe of a little over a month to build out this project,
        and our goal was to have the application fully functioning by the end of
        that timeframe.
      </Paragraph>
    </OneColumn>

    <TextAside>
      <Image src={components} alt="Forecast Application Work in Progress" />
      <div>
        <HeaderText>Web Stack and Explanation</HeaderText>
        <Paragraph>
          React was the clear choice for this project, because of its ease of
          state management and the amount of packages available. We also
          utilized Netlify as a server to host Decore, because it allows live
          updates alongside github.
          <br />
          <br />
          In the future, we hope to add Redux to this project to clean up the
          states a bit, and we also are looking into a backend that can allow
          writing to files so users can download the code right to their
          computer.
        </Paragraph>
      </div>
    </TextAside>

    <Image src={components1} alt="Forecast Application Work in Progress" />

    <TwoColumn>
      <HeaderText>Problems and Thought Process</HeaderText>
      <Paragraph>
        Processing the necessary code into the editor was the most complex part
        of this process, we needed to update the object listing of the elements
        everytime a user added, removed, or reordered any element. This required
        complex state management in order to display the proper html and css
        when exporting.
      </Paragraph>
    </TwoColumn>
  </Content>
)

export default Project
