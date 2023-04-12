import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"

import { ThemeContext } from "../providers/ThemeProvider"
import ToggleTheme from "./theme/ToggleTheme"
import { Wrapper } from "../styles/styles"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

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
          min-height: 100% !important;
        `}
      >
        <ToggleTheme />
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
