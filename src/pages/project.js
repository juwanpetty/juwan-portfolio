import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Content } from "../components/Layout"
import { Meta } from "../components/Project"

const Project = () => (
  <Content>
    <SEO title="Project" />
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
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Content>
)

export default Project
