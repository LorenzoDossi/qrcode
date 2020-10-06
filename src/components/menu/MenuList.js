import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import menuListStyles from './menuList.module.scss'

const MenuList = ({ menu }) => (
    <div className={menuListStyles.container}>
        <ul style={{ display: 'flex' }} className='menuList_item'>
            {
                menu.map(({ node: section }) => {
                    return (
                        <li key={section.plates[0]._key}>
                            <AnchorLink offset='80' href={`#${section.course}`}> {section.course} </AnchorLink>
                        </li>
                    )
                }
                )
            }
        </ul>
    </div>
)

export default MenuList