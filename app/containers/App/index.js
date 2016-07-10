/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css'

import Img from 'components/Img'
import Footer from 'components/Footer'
import Banner from './banner-metal.jpg'
import A from 'components/A'
import Navbar from 'components/Navbar'

import styles from './styles.css'

function App (props) {
  return (
    <div>
      <Navbar styles={appStyles.navbar} />
      <div className={styles.wrapper}>
        <A className={styles.logoWrapper} href='https://twitter.com/mxstbr'>
          <Img className={styles.logo} src={Banner} alt='react-boilerplate - Logo' />
        </A>
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

const appStyles = {
  navbar: {
    backgroundColor: 'green'
  }
}

export default App
