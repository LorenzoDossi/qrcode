import React from 'react'
import ButtonLanguage from './bottons/ButtonLanguage'

import Share from './bottons/icons/Share'
import Whatsapp from './bottons/icons/Whatsapp'
import Call from './bottons/icons/Call'

import Image from 'gatsby-image'
import headerStyles from './header.module.scss'

const Header = ({ siteSettings: { node: settings } }) => {

    const handleOnClick = () => {
        if (navigator.share) {
            navigator
                .share({
                    text: `${settings.siteName}, Menù`,
                    url: document.location.href,
                })
                .then(() => {
                    console.log('Successfully shared');
                })
                .catch(error => {
                    console.error('Something went wrong sharing the blog', error);
                });
        }
    }

    return (
        <div className={headerStyles.container}>
            <div>
                <Image fluid={settings.heroImage.asset.fluid} alt="immagine principale" className={headerStyles.image} />
            </div>
            <div className={headerStyles.buttons}>
                {settings.isLanguageButtonShown &&
                    <div className={headerStyles.language}>
                        <ButtonLanguage />
                    </div>
                }
                <div className={headerStyles.social}>
                    {settings.telephoneNumber &&
                        <a href={`tel:${settings.telephoneNumber}`} className={headerStyles.link}>
                            <Call />
                        </a>
                    }
                    {settings.whatsappNumber &&
                        <a href={`https://wa.me/${settings.whatsappNumber}`} className={headerStyles.link}>
                            <Whatsapp />
                        </a>
                    }
                    <span className={headerStyles.link} onClick={handleOnClick}>
                        <Share className={headerStyles.link} />
                    </span>
                </div>
            </div>
            <div className={headerStyles.website_title}>
                <h1 className='margin'>{settings.siteName}</h1>
            </div>
        </div>
    )
}

export default Header