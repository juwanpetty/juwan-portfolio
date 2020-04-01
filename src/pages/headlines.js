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

const Headlines = () => (
  <Content>
    <SEO title="Headlines" />
    <Title>Headlines</Title>
    <Description>
      Headlines is a browser extension started in Spring 2018 that I built out
      of the need for more functionality on my "new tab" page, outside of the
      standard search bar. Headlines replaces your new tab page with the 3 most
      recent articles from over 50 sources that you choose from all within the
      extension. Becuase I wanted more out of a "new tab" page, you can also
      save artciles to read later, customize the interface, and tell the local
      time and weather.
    </Description>

    <Meta>
      <ul>
        <h3>Role</h3>
        <li>Front End Developer</li>
        <li>Visual Designer</li>
      </ul>
      <ul>
        <h3>Technologies</h3>
        <li>React</li>
        <li>News API</li>
        <li>Dark Sky API</li>
      </ul>
      <ul>
        <h3>Completed</h3>
        <li>March 2019</li>
      </ul>
      <ul>
        <h3>Check it out</h3>
        <li>
          <a href="https://chrome.google.com/webstore/detail/headlines/ecgmdohhjabfepiagglidampbkfmmlcm?">
            View Extension
          </a>
        </li>
        <li>
          <a href="https://github.com/juwanpetty/headlines">Repository</a>
        </li>
      </ul>
    </Meta>

    <Image src={components} alt="Forecast Application Work in Progress" />

    <OneColumn style={{ marginBottom: "48px" }}>
      <HeaderText>Project Purpose and Goal</HeaderText>
      <Paragraph>
        I built this project because I couldn't find an extension that felt
        aesthetically pleasing and minimal yet still be able to offer useful
        functionality outside of delivering a search box for its users, so I
        built one myself.
        <br />
        <br />I also chose this project as a way to learn new programming
        concepts and push myself into learning a new framework: React. This
        project allowed me to docuement my journey on{" "}
        <a href="https://www.instagram.com/juwanpetty/">Instagram</a>, connect
        with other developers and get a great amount of feedback.
      </Paragraph>
    </OneColumn>

    <TextAside>
      <Image src={components} alt="Forecast Application Work in Progress" />
      <div>
        <HeaderText>Web Technologies and Explanation</HeaderText>
        <Paragraph>
          My first iteration of this project was built purely in JavaScript as a
          way to showcase how far we've come since the days of JQuery. It wasn't
          until a month or two down the road that I wanted to "level up" as a
          developer and learn the React framework.
          <br />
          <br />
          I chose React for its component-based approach of building out user
          interfaces, allowing me to focus on applications in an atomic level
          then build up (sort of like a puzzle peice). And coming from a design
          background, was something I was already familiar with.
          <br />
          <br />
          The main feature of the extension was delivering news straight to your
          "new tab" page. So I sought out to look for an API (Application
          Programming Interface) that allowed me to do just that. While there
          are a few good ones out there, I decided to go with the{" "}
          <a href="https://newsapi.org/">News API </a> to bring data into my
          extension.
        </Paragraph>
      </div>
    </TextAside>

    <Image src={components1} alt="Forecast Application Work in Progress" />

    <TwoColumn>
      <HeaderText>Final Thoughts</HeaderText>
      <Paragraph>
        Headlines continues to be an extension I use day in and day out to get
        my round of tech and gaming related news and stay on top of current
        topics. And I still have plans of going back to the project to add more
        features on down the road.
      </Paragraph>
    </TwoColumn>
  </Content>
)

export default Headlines
