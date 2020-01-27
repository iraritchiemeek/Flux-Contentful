import React from "react"
import { Section, Wrap } from '../styled-components/layout'
import { IntroP } from '../styled-components/text'

const Masthead = props => {

	return (
		<Section color="purple">
			<Wrap>
				<h1>End-to-end energy retailing.</h1>
				<IntroP>Flux gives you the foundation you need to successfully manage your business, from prospect to pay, and deliver experiences that truly delight your customers and the people who serve them.</IntroP>
			</Wrap>
		</Section>
	)
}

export default Masthead
