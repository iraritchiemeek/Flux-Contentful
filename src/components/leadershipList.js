import React from "react"
import { Section, Wrap, FlexContainer, FlexItem } from '../styled-components/layout'
import { IntroP } from '../styled-components/text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



const LeadershipList = props => {
	const {leadership} = props

	console.log(leadership)

	if (!leadership) return null

	const leadershipItem = data => {
		console.log(data)
		return (
			<FlexItem>
				<p>{data.fullName}</p>
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
