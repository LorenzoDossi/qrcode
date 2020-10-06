import React from 'react'


import Whatsapp from './Whatsapp'
import Share from './Share'
import Call from './Call'


const Icon = ({ iconName, whatsappLink, shareLink, callLink }) => (
    <>
        {iconName === 'WHATSAPP' && <Whatsapp link={whatsappLink} />}
        {iconName === 'SHARE' && <Share link={shareLink} />}
        {iconName === 'CALL' && <Call link={callLink} />}
    </>
)

export default Icon