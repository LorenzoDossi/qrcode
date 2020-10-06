import React from 'react'
import modalMenuItemStyles from './modalMenuItem.module.scss'
import Img from "gatsby-image"
import Modal from './modal/Modal'


const MenuItemModal = ({ isModalOpen, closeMenuItemModal, description, allergens, name, imageFluid }) => {
    return (
        <Modal
            isModalOpen={isModalOpen}
            closeModal={closeMenuItemModal}
        >
            <div className={modalMenuItemStyles.container}>
                <div className={modalMenuItemStyles.scroll}>
                    <h2 className={modalMenuItemStyles.details}>Dettagli</h2>

                    <div className={modalMenuItemStyles.image_container}>
                        <div className={modalMenuItemStyles.image}>
                            <Img fluid={imageFluid} alt="immagine della pietanza" className={modalMenuItemStyles.real_image} draggable={true} />
                        </div>
                    </div>
                    <h3 className={modalMenuItemStyles.name}>{name}</h3>
                    <p className={modalMenuItemStyles.description}>{description}</p>


                    {allergens.length > 0 &&

                        <div className={modalMenuItemStyles.allergens}>
                            <h2 className={modalMenuItemStyles.details}>Allergeni</h2>
                            <ul>
                                {
                                    allergens.map(({ allergen }) => (
                                        <li>
                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#B6E79F" />
                                            </svg>
                                            <h3>{allergen.it}</h3>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }

                </div>
            </div>

        </Modal>
    )
}

export default MenuItemModal