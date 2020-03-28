import React from "react"
import { Link } from "gatsby"

import { Content } from "../components/Layout/index"
import { Heading } from "../components/Index/index"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Content>
    <SEO title="Home" />
    <Heading />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Content>
)

export default IndexPage
