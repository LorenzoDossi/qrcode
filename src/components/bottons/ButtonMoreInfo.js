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

    let icon = undefined

    if (ingredients?.lactose === true) {
        icon = <Lactose />
    }
    if (ingredients?.vegan === true) {
        icon = <Vegan />
    }
    if ((ingredients?.lactose === true) && (ingredients?.vegan === true)) {
        icon = <Vegan />
        console.log("what")
    }

    return (
        <>
            <button className='link_modal' onClick={showMenuItemModal}>

                {ingredients?.gluten && <span><Gluten /></span>}


                <span>
                    {icon}
                </span>

                <span>tocca per maggiori dettagli</span>
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