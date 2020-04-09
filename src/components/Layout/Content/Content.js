import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Footer, Header } from "../"
import { GlobalStyle } from "../../../constants/styles"
import { Container, Wrapper, ContentWrapper } from "./Content.module"
import { color } from "../../../constants/styles"

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

  const lightTheme = color.light
  const darkTheme = color.dark

  const stored = localStorage.getItem("isDarkMode")

  const [isDarkMode, setIsDarkMode] = useState(stored === "true" ? true : false)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Container>
          <Wrapper>
            <ContentWrapper>
              <Header
                siteTitle={data.site.siteMetadata.title}
                handleIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <main>{children}</main>
            </ContentWrapper>
            <Footer />
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  )
}
