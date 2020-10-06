import React from 'react'
import buttonFilterStyles from './buttonFilter.module.scss'
import Search from './icons/Search'
import FilterModal from '../modals/FilterModal'

const ButtonFilter = () => {
    const [isModalopen, setIsOpen] = React.useState(false)

    const showFilterModal = () => {
        setIsOpen(true)
    }
    const closeFilterModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className={buttonFilterStyles.container}>
                <button onClick={showFilterModal}>
                    <div >
                        <span><Search /></span>
                        <span>filtro</span>
                    </div>
                </button>
            </div>
            <FilterModal
                isModalopen={isModalopen}
                closeFilterModal={closeFilterModal}
            />
        </>
    )
}

export default ButtonFilter