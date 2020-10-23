import React, {useContext} from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import ToggleTheme from "../components/theme/ToggleTheme"
import { Wrapper } from "../styles/styles"
import { ThemeContext } from "../providers/ThemeProvider"

export default function Home({ data }) {
  const { theme } = useContext(ThemeContext);
  console.log(
    "index", theme
  )
  return (
    <Layout>
      <Wrapper theme={theme}>
        <ToggleTheme/>
      </Wrapper>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Хочется вкусненького...
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Рецепты</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.type}
                </span>
              </h3>
              <p>{node.frontmatter.comment}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            comment
          }
          fields {
            slug
          }
        }
      }
    }
  }
`