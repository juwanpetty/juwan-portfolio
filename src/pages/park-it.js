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

import parkitKickoff from "../images/parkit-kickoff.webp"
import parkitKickoff1 from "../images/parkit-kickoff-1.webp"
import parkitComp from "../images/parkit-comp-analysis.webp"
import parkitPrimary from "../images/parkit-primary.webp"
import parkitSecondary from "../images/parkit-secondary.webp"
import parkitFlow from "../images/parkit-flow.webp"
import parkitArch from "../images/parkit-architecture.webp"
import parkitModeling from "../images/parkit-modeling.jpg"
import parkitResearch from "../images/parkit-research.jpg"
import parkitMockup from "../images/parkit-mockup.webp"
import parkitInterview from "../images/parkit-interview.png"

const PictureInPicture = () => (
  <Content>
    <SEO title="Park It" />
    <Title>Park It</Title>
    <Description>
      Park It is a mobile parking app that primarily allows for users to easily
      pay for on-street and off-street parking right from your phone. When you
      forget where you parked your car, Park It also will help you find it.
      <br />
      <br />
      One of the biggest pet-peeves for daily commuters living in urban
      metropolitan cities has been where to park their vehicles while racing
      against time. Most of the times during peak hours, getting a spot either
      takes ages or makes for congested parking, and Park It is looking to
      tackle this problem.
    </Description>

    <Meta
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <ul>
        <h3>Role</h3>
        <li>Conceptualization</li>
        <li>Visual Designer</li>
      </ul>
      <ul>
        <h3>Duration</h3>
        <li>August 2019 — April 2020</li>
      </ul>
    </Meta>

    <TextAside style={{ marginBottom: "48px" }}>
      <Image src={parkitKickoff} alt="Park It Kickoff" />
      <div>
        <HeaderText>Kickoff</HeaderText>
        <Paragraph>
          Starting off, we asked ourselves a few initial questions. Who is our
          primary user? What kind of goals do they have? Why would someone want
          to use this application? Just how large of a scope do we want this
          project to be?
          <br />
          <br />
          After interviewing a few participants to establish archetypes later
          on, it became evident that the goals they wanted to accomplish all
          fell within the same categories; making the process of finding
          available parking stress-free and a simple process.
        </Paragraph>
      </div>
    </TextAside>

    <Image src={parkitKickoff1} alt="Park It Kickoff" />

    <TextAside style={{ marginBottom: "60px" }}>
      <div>
        <HeaderText>Research</HeaderText>
        <Paragraph>
          After doing some research on how a mobile parking application would
          work, we learned that there are a few parking apps that operate on the
          “Navigation Only” model by telling the user the whereabouts of a
          vacant spot the bare minimum.
          <br />
          <br />
          However, a more practical approach will allow car owners to book a
          parking spot and pay for it according to the pricing format of the
          lot. It is a more time saving method and also makes the whole process
          more efficient and is known as the "Navigation + Booking" model.
        </Paragraph>
      </div>
      <Image src={parkitResearch} alt="Park It Reasearch" />
    </TextAside>

    <Image src={parkitInterview} alt="Park It Interview Session" />

    <OneColumn style={{ marginBottom: "48px" }}>
      <HeaderText>Competitive Analysis</HeaderText>
      <Paragraph>
        In order to construct a concise and solid foundation for Park It, we had
        to venture out and see what the prominent parking applications were
        already doing and what user goals they were not reaching. We evaluated
        several features deemed vital from user surveys and identified which
        ones Park It could capitalize on to have a leg up over other parking
        applications.
        <br />
        <br />
        We found that while most apps across the board implemented informative
        maps for a more detailed look at parking locations and the offering the
        ability to make in-payments, that was where the similarities stopped.
        <br />
        <br />
        None of the apps we researched allowed their users to enjoy a seamless
        parking experience through and through and subtly enforced their users
        to switch between applications to complete their actions.
      </Paragraph>
    </OneColumn>

    <Image src={parkitComp} alt="Park It Competitive Analysis" />

    <TextAside style={{ marginBottom: "48px" }}>
      <Image src={parkitModeling} alt="Park It Modeling" />
      <div>
        <HeaderText>Modeling</HeaderText>
        <Paragraph>
          In the beginning, ideas were still somehow blurred and there wasn't a
          very clear vision of what the product could become. Instead a whole
          bunch of great tangle of functionalities that could work. It was in
          this stage, that we then came up with specific questions to ask
          potential users to solidify our ideas and push us further in the right
          direction.
        </Paragraph>
      </div>
    </TextAside>

    <OneColumn>
      <HeaderText>Requirements</HeaderText>
      <Paragraph>
        With the feedback we received in our user interviews, we created
        personas that would best represent our primary and secondary users, and
        their typical end goals and user flow.
      </Paragraph>
    </OneColumn>

    <Image src={parkitPrimary} alt="Park It Primary Persona" />

    <Image
      style={{ marginBottom: "96px" }}
      src={parkitSecondary}
      alt="Park It Secondary Persona"
    />

    <TextAside style={{ marginBottom: "48px" }}>
      <Image src={parkitFlow} alt="Park It User Flow" />
      <div>
        <HeaderText>Framework</HeaderText>
        <Paragraph>
          Before moving onto high fidelity wireframes and mockups, we wanted to
          get a feel for what the core of the application would look like when
          put in front of our users.
          <br />
          <br />
          With wireframes (low-fi simplified designs that allow you to get a
          full scope of the entire app), we tackled app specific flows and went
          deep into interactions without compromising core product decisions
          from the get go.
        </Paragraph>
      </div>
    </TextAside>

    <Image src={parkitArch} alt="Park It Info Arch" />

    <OneColumn style={{ marginBottom: "48px" }}>
      <HeaderText>Support</HeaderText>
      <Paragraph>
        Even though an MVP means compromising and leaving potentially great
        features out of the product, it also leaves room to later improve the
        product based on feedback we received. This allowed us to separate the
        nice-to-have from the must-have, getting closer and closer to creating
        an MVP — a Minimum Viable Product. This ultimately led to our first
        iteration of the high fidelity prototype for our app. With this, it
        started to shape up more definitely.
      </Paragraph>
    </OneColumn>

    <Image
      style={{ marginBottom: "96px" }}
      src={parkitMockup}
      alt="Park It Mockup"
    />

    <iframe
      title="Figma prototype"
      style={{ border: "none", marginBottom: "48px" }}
      width="100%"
      height="1000px"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsScmhw5tBoUiEHmpQwvq2z%2FParking-App%3Fnode-id%3D70%253A669%26scaling%3Dmin-zoom"
      allowfullscreen
    ></iframe>

    <TwoColumn>
      <HeaderText>Takeaways</HeaderText>
      <Paragraph>
        Working on this project gave me mountains of insight in working with
        other team members of variously skilled backgrounds, learning from our
        interviews, and researching case studies as well as technological
        feasibility on how a parking app could and should work. I thoroughly
        enjoyed working on this project with my teammates and really got an
        interesting view into the mindset and workflow of research design coming
        from a visual design focused front end developer background.
      </Paragraph>
    </TwoColumn>
  </Content>
)

export default PictureInPicture
