import React from 'react'
import ReactModal from 'react-modal'
import ButtonClose from '../../bottons/ButtonClose'
import modalStyles from './modalStyles.module.scss'

const deafultStyles = {
    content: {
        top: '50%',
        left: '20px',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(0, -50%)',
        borderRadius: '7px',
        width: 'calc(100% - 40px)',
        border: 'none',
        boxShadow: '0 0 10px rgba(0, 0, 0, .25)',
    }
};

const Module = ({ children, isModalOpen, closeModal }) => (
    <ReactModal
        style={deafultStyles}
        isOpen={isModalOpen}
    >

        {children}
        <div className={modalStyles.grey_bar}>
        </div>
        <span onClick={closeModal}>
            <ButtonClose />
        </span>

    </ReactModal>
)

export default Module