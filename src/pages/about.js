import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LeadershipList from "../components/leadershipList"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { ContentContainer, VerticalSpace, InnerContainer, FlexContainer } from "../styled-components/layout"


class About extends React.Component {
  render() {
  	
  	const { data } = this.props

    return (
      <Layout masthead={data.contentfulPage.masthead}>
        <SEO title={data.contentfulPage.title} />
        <ContentContainer>
          <LeadershipList leadership={data.contentfulPage.leadershipPeople} />
        </ContentContainer>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    contentfulPage(contentful_id: {eq: "2wXf2lz6a1Sty3gRsguAN2"}){
    	title
    	masthead {
    		title
    		description {
    			json
    		}
    	}
      leadershipPeople {
        fullName
        position
        email
        description {
          json
        }
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

