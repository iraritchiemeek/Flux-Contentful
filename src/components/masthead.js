import React from "react"
import { Section, Wrap } from '../styled-components/layout'
import { IntroP } from '../styled-components/text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



const Masthead = props => {
	const {title, description} = props

	if (!title || !description) return null


	const options = {
	  renderNode: {
	    [BLOCKS.PARAGRAPH]: (node, children) => <IntroP>{children}</IntroP>,
	  }
	};

	return (
		<Section color="purple">
			<Wrap>
				<h1>{title}</h1>
				{documentToReactComponents(description.json, options)}
			</Wrap>
		</Section>
	)
}

export default Masthead
