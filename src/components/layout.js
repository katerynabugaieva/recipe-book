import React, { useContext } from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import { ThemeContext } from "../providers/ThemeProvider"
import { Wrapper } from "../styles/styles"

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext)
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Wrapper theme={theme}>
      <div
        css={css`
          margin: 0 auto;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >

        <Link to={`/`}>
          <h4
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h4>
        </Link>
        {children}
      </div>
    </Wrapper>
  )
}


// <ToggleTheme />
