import React, { PropTypes } from 'react'
import { LinkMap } from 'models/navigation'

import css from './styles.css'

const createLinks = links => links.map(link => (
  <a href={link.path}>link.title</a>
)).toArray()

const Navbar = ({styles = {}, links = new LinkMap()}) => (
  <div className={css.navbar} style={{...defaultStyles, ...styles}}>
    <div className={css.left}></div>
    <div className={css.center}></div>
    <div className={css.right}>
      {createLinks(links)}
    </div>
  </div>
)

Navbar.propTypes = {
  styles: PropTypes.object,
  links: PropTypes.instanceOf(LinkMap)
}

const defaultStyles = {
  backgroundColor: 'red'
}

export default Navbar
