import React from "react"
import { Wrapper } from "./Footer.module"

export const Footer = () => (
  <Wrapper>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Wrapper>
)
