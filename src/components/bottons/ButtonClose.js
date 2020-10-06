import React from 'react'

import buttonCLoseStyles from './buttonClose.module.scss'

const ButtonClose = () => (
    <div className={buttonCLoseStyles.container}>
        <button>
            <span>OK</span>
            <span>Torna al menu</span>
        </button>
    </div>
)

export default ButtonClose