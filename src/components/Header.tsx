import React from 'react';
import './Header.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = (props: any) => {
    return (
        <header className={props.menuCityShow ? 'open' : 'close'}>
            <img src="/dotGIS.svg" alt="" />
            <span>
                dotGIS React coding challenge
            </span>
            <div onClick={() => props.openMenu(props.menuOpen)} >
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </header>
    )
}

export default Header
