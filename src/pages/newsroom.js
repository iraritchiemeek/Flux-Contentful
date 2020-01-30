import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"


class Newsroom extends React.Component {
  render() {

  	const { data } = this.props

    return (
      <Layout masthead={data.contentfulPage.masthead}>
        <SEO title={data.contentfulPage.title} />
        <ContentContainer>

        </ContentContainer>
      </Layout>
    )
  }
}

export default Newsroom

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "2ffHCI7LH0qFcVJ17uRYUf"}){
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
