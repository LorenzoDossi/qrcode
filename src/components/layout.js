/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import "./styles/globalStyle.scss"
import Header from "./header"
import { StaticQuery, graphql } from "gatsby"
import layoutStyles from './layout.module.scss'

const Layout = ({ children, data }) => {
  document.addEventListener("touchstart", function () { }, true);
  return (
    <>
      <StaticQuery
        query={graphql`query siteSettings {
          allSanitySiteSettings {
            edges {
              node {
                siteName
                isLanguageButtonShown
                whatsappNumber
                telephoneNumber
                heroImage {
                  asset {
                    fluid(maxWidth: 400) {
                      ...GatsbySanityImageFluid
                    } 
                  }
                }
              } 
            }
          }
        }`}
        render={data => (
          <Header siteSettings={data.allSanitySiteSettings.edges[0]} />
        )}
      />
      <div style={{ zIndex: '-1' }}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
