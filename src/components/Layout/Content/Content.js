/**
 * Content component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Footer, Header } from "../"
import { GlobalStyle } from "../../../constants/styles"
import { Wrapper, ContentWrapper } from "./Content.module"

export const Content = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContentWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}
