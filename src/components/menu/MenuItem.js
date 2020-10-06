import React from 'react'

import menuItemStyles from './menuItem.module.scss'
import ButtonMoreInfo from '../bottons/ButtonMoreInfo'

const MenuItem = ({ section }) => {

    return (
        section.plates.map(plates => {

            return (
                <div key={plates._key} className={menuItemStyles.container}>
                    <div className={`margin ${menuItemStyles.max_width}`}>
                        <div>
                            <h3>{plates.name.it}</h3>
                            <p>{plates.description.it}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <ButtonMoreInfo
                                name={plates.name.it}
                                imageFluid={plates.image?.asset?.fluid}
                                imageUrl={plates.image?.asset?.fluid?.src}
                                description={plates.description.it}
                                allergens={plates.allergens}
                                ingredients={plates.ingredients}
                            />
                            <span>
                                <p style={{ margin: '10px 0 0 0' }}>{plates.price}€</p>
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default MenuItem