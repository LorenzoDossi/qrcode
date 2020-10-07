import React from 'react'
import ButtonLanguage from './bottons/ButtonLanguage'

import Share from './bottons/icons/share'
import Whatsapp from './bottons/icons/whatsapp'
import Call from './bottons/icons/call'

import Image from 'gatsby-image'
import headerStyles from './header.module.scss'

const Header = ({ siteSettings: { node: settings } }) => {
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
                        <div className={headerStyles.link}>
                            <Call phoneNumber={settings.telephoneNumber} />
                        </div>
                    }
                    {settings.whatsappNumber &&
                        <span className={headerStyles.link}>
                            <Whatsapp whatsappLink={settings.whatsappNumber} />
                        </span>
                    }
                    <span className={headerStyles.link}>
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