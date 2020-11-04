import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import styled from 'styled-components';

const Items = styled.li`
    display: inline;
    font-size: 12px;
    line-height: 110%;
    color: #ffffff;
    background: #1979a9;
    border-radius: 16px;
    border: 0;
    padding: 9px 14px;
    margin: 0px 12px 0px 0px;
  }
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.tags && post.frontmatter.tags.map((tag, index) => (
          <Items key={index}>{tag}</Items>
        ))}
        <br/>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

//  < LabelsItem > { post.frontmatter.tags }</LabelsItem>
