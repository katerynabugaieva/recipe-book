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
 
  return (
    <Wrapper theme={theme}>
    <Layout>
        <ToggleTheme/>
      <div>
        <h3>
          Хочется вкусненького...
        </h3>
        <h4> Доступно несколько рецептов: {data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h5
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
              </h5>
              <p>{node.frontmatter.comment}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
      </Wrapper>
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