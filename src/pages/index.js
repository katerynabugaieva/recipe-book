import React, {useContext} from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import ToggleTheme from "../components/theme/ToggleTheme"
import { Wrapper } from "../styles/styles"
import { ThemeContext } from "../providers/ThemeProvider"
import styled from 'styled-components';

const Tags = styled.li`
    display: inline;
    font-size: 9px;
    color: #555;
    padding: 0px 5px 0px 0px;
  }
`;

const Divider = styled.div`
   width: 100%;
   border: 1px dotted #555;
   opacity: 50%;
   margin: 10px 0px;
  }
`;

const Label = styled.label`
   margin: 0px 10px;
   color: ${({ theme }) => (theme === 'dark' ? 'white' : '#212121')};
  }
`;


export default function Home({ data }) {
  const { theme } = useContext(ThemeContext);
 
  return (
    <Wrapper theme={theme}>
    <Layout>
        <ToggleTheme/>
      <div>
        <h4> Доступно рецептов: {data.allMarkdownRemark.totalCount}</h4>
<div style={{marginBottom: "20px"}}>
  <input type="checkbox"/><Label>Breakfast</Label>
  <input type="checkbox"/><Label>Without backing</Label>
  <input type="checkbox"/><Label>Gasts</Label>
</div>


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
                <span css={css`
                  color: #555;
                  font-size: 10px;
                `}>
                  — вкус/морочность {node.frontmatter.tasteRating}/{node.frontmatter.effortRating}
                  
                </span>
               <p> 
                  {node.frontmatter.tags && node.frontmatter.tags.map((tag, index) => (
          <Tags key={index}>{tag},</Tags>
        ))}
                </p>
              </h5>
              <p css={css`
                margin: 0;
              `}>{node.frontmatter.comment}</p>
            </Link>
            <Divider/>
          </div>
        ))}
      </div>
    </Layout>
      </Wrapper>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: [DESC, ASC], fields: [frontmatter___tasteRating, frontmatter___effortRating] }){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            comment
            tasteRating
            effortRating
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`