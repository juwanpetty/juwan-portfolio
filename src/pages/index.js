import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { Heading, Projects, Posts } from "../components/Index"
// import Image from "../components/image"

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <Heading />
    <Projects />
    <Posts />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Content>
)

export default IndexPage
