import React from 'react'
import ModalMenuItem from '../modals/ModalMenuItem'
import Gluten from '../bottons/icons/gluten'
import Lactose from '../bottons/icons/Lactose'
import Vegan from '../bottons/icons/Vegan'

const ButtonMoreInfo = ({ description, name, imageUrl, imageFluid, allergens, ingredients }) => {
    console.log(ingredients)
    const [isModalOpen, setIsOpen] = React.useState(false)

    const showMenuItemModal = () => {
        setIsOpen(true)
    }
    const closeMenuItemModal = () => {
        setIsOpen(false)
    }

    let gluten = undefined
    let lactoseOrVegan = undefined
    let isIconReal = false

    if (ingredients?.gluten === true) {
        gluten = <Gluten />
        isIconReal = true
    }
    if (ingredients?.lactose === true) {
        lactoseOrVegan = <Lactose />
        isIconReal = true
    }
    if (ingredients?.vegan === true) {
        lactoseOrVegan = <Vegan />
        isIconReal = true
    }
    if ((ingredients?.lactose === true) && (ingredients?.vegan === true)) {
        lactoseOrVegan = <Vegan />
        console.log("what")
    }

    return (
        <>
            <button className='link_modal' onClick={showMenuItemModal}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ margin: isIconReal && '0 10px 0 0' }} >
                        <span>{gluten}</span>
                        <span>{lactoseOrVegan}</span>
                    </span>
                    <span>tocca per maggiori dettagli</span>
                </span>
            </button>

            <ModalMenuItem
                imageUrl={imageUrl}
                imageFluid={imageFluid}
                allergens={allergens}
                name={name}
                description={description}
                isModalOpen={isModalOpen}
                closeMenuItemModal={closeMenuItemModal}
            />
        </>

    )
}

export default ButtonMoreInfo