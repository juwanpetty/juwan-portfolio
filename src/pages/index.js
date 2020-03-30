import React from "react"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { Heading, Projects, Posts } from "../components/Index"

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <Heading />
    <Projects />
    <Posts />
  </Content>
)

export default IndexPage
