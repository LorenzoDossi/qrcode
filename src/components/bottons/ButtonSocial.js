import React from 'react'

import Icon from './icons/Icon'
import buttonSocialStyles from './buttonSocial.module.scss'

const ButtonSocial = ({ whatsapp, telephone }) => {
    const shareButton = () => {
        if (navigator.share) {
            navigator.share({
                text: 'Menu',
                url: document.location.href
            })
                .then(() => {
                    alert('Condiviso con successo')
                })
                .catch(error => {
                    console.error('opps')
                })
        }
    }
    return (
        <div className={buttonSocialStyles.container}>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <a href={whatsapp}>
                    <li>
                        <Icon iconName={'WHATSAPP'} />
                    </li>
                </a>
                <a href={`tel:${telephone}`}>
                    <li>
                        <Icon iconName={'CALL'} />
                    </li>
                </a>
                <li onClick={shareButton}>
                    <Icon iconName={'SHARE'} />
                </li>
            </ul>
        </div>
    )
}

export default ButtonSocial