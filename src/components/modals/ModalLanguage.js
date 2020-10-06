import React from 'react'
import ReactModal from 'react-modal'
import modalLanguageStyles from './modalLanguage.module.scss'
import Flag from '../bottons/flags/Flag'
import Modal from './modal/Modal'

const LanguageModal = ({ isModalOpen, closeLanguageModal }) => (
    <Modal
        isModalOpen={isModalOpen}
        closeModal={closeLanguageModal}
    >
        <h2>Lingue</h2>
        <div className={modalLanguageStyles.spacer}>
            <button className={modalLanguageStyles.modal_button}>
                <Flag flagName={'IT'} />
                <span className='language_text'>Italiano</span>
            </button>
            <button className={modalLanguageStyles.modal_button}>
                <Flag flagName={'DE'} />
                <span className='language_text'>Deutsch</span>
            </button>
        </div>
    </Modal>
)

export default LanguageModal