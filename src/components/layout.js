/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import ButtonLanguage from "../components/bottons/ButtonLanguage"
import ButtonSocial from "../components/bottons/ButtonSocial"

import "./styles/globalStyle.scss"
import layoutStyles from './layout.module.scss'
import ButtonFilter from './bottons/ButtonFilter'


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div >
        <Image />
        <div className={`margin ${layoutStyles.buttons}`}>
          <ButtonLanguage />
          <ButtonSocial
            whatsapp={'https://wa.link/p9xtp6'}
            telephone={'+393407877684'}
          />
        </div>
        <div className={layoutStyles.title}>
          <h1 className='margin'>PIZZERIA IL TAGLIERE</h1>
        </div>
      </div>

      {/* <ButtonFilter /> */}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
