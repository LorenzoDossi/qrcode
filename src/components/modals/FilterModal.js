import React from 'react'
import ReactModal from 'react-modal'
import filterModalStyles from './filterModal.module.scss'
import ButtonCLose from '../bottons/ButtonClose'
import Modal from './modal/Modal'


const FilterModal = ({ modalIsOpen, closeFilterModal }) => (
    <Modal
        isModalOpen={modalIsOpen}
        closeModal={closeFilterModal}
        contentLabel="Finestra per la selezione della lingua"
    >
        <h2>Filtro</h2>
        <div className={filterModalStyles.spacer}>
            <button className={filterModalStyles.modal_button}>
                <span className='language_text'>Lattosio</span>
            </button>
            <button className={filterModalStyles.modal_button}>

                <span className='language_text'>Noci</span>
            </button>
        </div>

    </Modal>
)

export default FilterModal