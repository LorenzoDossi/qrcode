import React from 'react'

import Flag from './flags/Flag'

import buttonLanguageStyles from "./buttonLanguage.module.scss"
import ModalLanguage from '../modals/ModalLanguage'

const ButtonLanguage = () => {
    const [isModalOpen, setIsOpen] = React.useState(false)

    const showLanguageModal = () => {
        setIsOpen(true)
    }
    const closeLanguageModal = () => {
        setIsOpen(false)
    }
    return (
        <span>
            <button
                onClick={showLanguageModal}
                className={buttonLanguageStyles.container}
            >
                <Flag flagName={'IT'} />
                <span className='language_text'>Lingua</span>
            </button>

            <ModalLanguage
                isModalOpen={isModalOpen}
                closeLanguageModal={closeLanguageModal}
            />

        </span>
    )
}

export default ButtonLanguage