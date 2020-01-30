import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"


class Index extends React.Component {
  render() {

  	const { data } = this.props

    return (
      <Layout masthead={data.contentfulPage.masthead}>
        <SEO title={data.contentfulPage.title} />
        <ContentContainer>
          <h2>{data.allWordpressPost.edges[0].node.title}</h2>
        </ContentContainer>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
        }
      }
    }
    contentfulPage(contentful_id: {eq: "1SuRPyFXVkbyYRCUTFTHEv"}){
    	title
    	masthead {
    		title
    		description {
    			json
    		}
    	}
    }
  }
`
