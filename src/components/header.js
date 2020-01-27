import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavList, NavItem, Logo, StyledHeader} from "../styled-components/layout"
import Img from "gatsby-image"

const Header = ({ siteTitle, logo }) => (
  <StyledHeader>
  	<nav>
  		<NavList>
        <Logo><Link to="//"></Link></Logo>
        <NavItem><Link activeClassName="active" to="/about/">About</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/solutions/">Solutions</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/careers/">Careers</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/newsroom/">Newsroom</Link></NavItem>
        <NavItem><Link activeClassName="active" to="/contact/">Contact</Link></NavItem>
  		</NavList>
  	</nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header