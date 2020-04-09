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

import pip from "../images/pip.png"
import pipSmall from "../images/pip-small.png"
import pipSettings from "../images/pip-settings.png"

const ForksAndKnives = () => (
  <Content>
    <SEO title="Forks & Knives" />
    <Title>Forks & Knives</Title>
    <Description>
      Picture-in-Picture (PiP) allows you to watch videos in a floating window
      (always on top of other windows) so you can keep an eye on what you’re
      watching while interacting with other sites, or applications.
    </Description>

    <Meta>
      <ul>
        <h3>Role</h3>
        <li>Front End Developer</li>
        <li>Visual Designer</li>
      </ul>
      <ul>
        <h3>Technologies</h3>
        <li>Netlify</li>
        <li>Netlify CMS</li>
        <li>GatsbyJS</li>
      </ul>
      <ul>
        <h3>Completed</h3>
        <li>Ongoing</li>
      </ul>
      <ul>
        <h3>Check it out</h3>
        <li>
          <a href="https://github.com/juwanpetty/recipe-collection">
            Repository
          </a>
        </li>
      </ul>
    </Meta>

    <Image src={pip} alt="Picture in Picture browser application" />

    <OneColumn style={{ marginBottom: "48px" }}>
      <HeaderText>Project Purpose and Goal</HeaderText>
      <Paragraph>
        When the Picture-in-Picture API was available to developers, I decided
        to make the feature more accesible to the avergae user. Being a
        developer, I knew how to navigate the browser settings and
        configurations to activate PiP for when I want to watch Netflix but go
        through my Twitter feed at the same time.
      </Paragraph>
    </OneColumn>

    <TextAside>
      <Image src={pipSmall} alt="PiP video" />
      <div>
        <HeaderText>Web Technologies and Explanation</HeaderText>
        <Paragraph>
          Picture-in-Picture made its first appearance on the web in the Safari
          browser with the release of macOS Sierra in 2016. It made it possible
          for a user to pop a video out into a small floating window that stays
          above all others, so that they can keep watching while doing other
          things. It’s an idea that came from TV, where, for example, you might
          want to keep watching your Popular Sporting Event even as you browse
          the guide or even other channels.
        </Paragraph>
      </div>
    </TextAside>

    <Image src={pipSettings} alt="Pip browser settings" />

    <TwoColumn>
      <HeaderText>Final Thoughts</HeaderText>
      <Paragraph>
        Working with the Picture in Picture API, opened my eyes to all the
        things the browser has to offer, and gave me insight on some not so
        popular browser APIs that can be utilized in to make our day to day
        lives eaiser.
      </Paragraph>
    </TwoColumn>
  </Content>
)

export default ForksAndKnives
