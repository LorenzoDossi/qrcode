import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

import MenuList from '../components/menu/MenuList'
import MenuItem from '../components/menu/MenuItem'
import ogImage from '../images/ogImage.webp'

export const sanityMenu = graphql`
  {
    allSanityMenu {
      edges {
        node {
          course
          plates {
            _key
            name {
              it
            }
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            description {
              it
            }
            price
            allergens {
              allergen {
                it
              }
            }
            ingredients {
              gluten
              lactose
              vegan
            }
          }
        }
      }
    }
}
`

const IndexPage = ({ data }) => {
  const menu = data.allSanityMenu.edges

  return (
    <Layout>
      <SEO
        title="Pizzeria il Tagliere, menù"
        description="Descrizione breve per whatsapp."
        lang="it"
        image={ogImage}
      />

      <MenuList menu={menu} />

      {
        menu.map(({ node: section }) => {

          return (
            <span key={section.plates[0]._key}>

              <h2 className='margin_section' id={`${section.course}`}> {section.course} </h2>
              <MenuItem
                section={section}
              />

            </span>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
