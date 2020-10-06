import React from 'react'
import ModalMenuItem from '../modals/ModalMenuItem'

const ButtonMoreInfo = ({ description, name, imageUrl, imageFluid, allergens }) => {
    const [isModalOpen, setIsOpen] = React.useState(false)

    const showMenuItemModal = () => {
        setIsOpen(true)
    }
    const closeMenuItemModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <button className='link_modal' onClick={showMenuItemModal}>
                tocca per maggiori dettagli
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