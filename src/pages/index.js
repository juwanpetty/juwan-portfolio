import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout/index"
import { Heading, Projects } from "../components/Index/index"
// import Image from "../components/image"

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <Heading />
    <Projects />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Content>
)

export default IndexPage
