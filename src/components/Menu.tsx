import React from 'react';

import './Menu.scss';

const Menu: React.FC = (props: any) => {
    if (!props.menuCityShow) {
        return null
    }
    return (
        <nav>
            <ul>
                {
                    props.items.map((item: any) => <li key={item} onClick={() => props.loadCity(item)}>{item}</li>)
                }
            </ul>
        </nav>
    )
}

export default Menu
