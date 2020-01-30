import styled from 'styled-components'
import { color, device, spacing }  from './variables.js';

export const NavList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`

export const StyledHeader = styled.header`
	@media ${device.tablet} {
		padding: 0 30px;
		nav {
			max-width: ${spacing.maxContentWidth};
		}
	}
	background-color: ${color.fluxPurple};
	padding: 0 15px;
	box-sizing: border-box;
	nav {
		padding: 8px 0;
		margin: 0 auto;
		max-width: 100%;
	}
`

export const NavItem = styled.li`
	width: 100%;
	@media ${device.tablet} {
		flex: 1;
	}
	padding: .8em;
	text-align: center;
	a, a:visited, a:active {
		font-size: 17px;
		font-weight: 300;
		color: white;
		text-decoration: none;
	}
	a:hover {
		color: #ea1e68;
	}
	a.active {
		color: #ea1e68;
	}
`

export const InnerContainer = styled.div`
	padding: 0 ${spacing.betweenItemSpace}em;
`

export const Logo = styled.div`
	cursor: pointer;
	padding: .8em;
	width: 20px;
	height: 20px;
	margin-right: ${spacing.betweenItemSpace}em;

`

export const ContentContainer = styled.section`
	@media ${device.tablet} {
		padding: 2em 0;
	}
	padding: 1em;
	max-width: ${spacing.maxContentWidth};
    margin: auto;
    box-sizing: border-box;
`

export const FlexContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
`

export const FlexItem = styled.div`
	width: 100%;
	@media ${device.tablet} {
		width: ${props => props.fullWidth ? "100%" : props.width};
		padding: 1.1em ${spacing.betweenItemSpace}em;
		box-sizing: border-box;
	}
	h2 {
		color: ${color.lightBlue};
	}
`

const calcNthChild = width => Math.round(100 / parseFloat(width))

FlexItem.defaultProps = {
	width: "33.333%"
}

export const VerticalList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`

export const VerticalListItem = styled.li`
	padding: 0 0 ${spacing.betweenItemSpace}em 0;
`

export const TripleColumnText = styled.div`
	@media ${device.tablet} {
		column-count: 3;
		column-gap: ${spacing.betweenItemSpace * 2}em;
	}
`
export const VerticalSpace = styled.div`
	width: 100%;
	padding: ${spacing.betweenItemSpace}em 0;
	@media ${device.tablet} {
		padding: ${props => props.space || `${spacing.betweenItemSpace}em`} 0;
	}
`

export const Button = styled.button`
	background-color: ${color.lightBlue};
	display: inline-block;
	transition: background-color 0.1s ease-out;
	border: none;
	cursor: pointer;
	outline: none;
	padding: 7px 20px;
	a, a:hover, a:active, p {
		color: white;
	}
	&:hover {
		background-color: ${color.darkLightBlue};
	}
`


// Flux Site. To delete most of above code in future.

export const Section = styled.section`
	padding: 5em 0;
	background: ${props => !props.color ? 'none' : props.color == 'purple' ? 'linear-gradient(#5f259f 20%, #f7aac6 150%)' : ''};
`

export const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`




