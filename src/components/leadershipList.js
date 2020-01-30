import React from "react"
import { Section, Wrap, FlexContainer, FlexItem, VerticalSpace} from '../styled-components/layout'
import { CenterP } from '../styled-components/text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Img from "gatsby-image"




const LeadershipList = props => {
	const {leadership} = props

	if (!leadership) return null

	const leadershipItem = data => {
		console.log(data)
		return (
			<FlexItem width="25%">
				<Img style={{borderRadius: '50%'}} fluid={data.photo.fluid} />
				<CenterP><strong>{data.fullName}</strong></CenterP>
				<CenterP>{data.position}</CenterP>
				<VerticalSpace space="15px" />
				<a href="#"><CenterP style={{color: '#ea1e68', fontSize: '14px'}} >{data.email}</CenterP></a>
			</FlexItem>
		)
	}


	return (
		<Section>
			<Wrap>
				<FlexContainer>
					{leadership.map(data => leadershipItem(data))}
				</FlexContainer>
			</Wrap>
		</Section>
	)
}

export default LeadershipList
