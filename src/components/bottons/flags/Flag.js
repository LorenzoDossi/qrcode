import React from 'react'


import IT from './it'
import EN from './en'
import DE from './de'


const Flag = ({ flagName }) => (
    <span>
        {flagName === 'IT' && <IT />}
        {flagName === 'DE' && <DE />}
        {flagName === 'EN' && <EN />}
    </span>
)

export default Flag