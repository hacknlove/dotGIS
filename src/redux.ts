import { createStore } from 'redux'

import './openweathermap'

const initialState = {
    menuType: 'CITIES',
    ciudades: [
         'Albacete ',
         'Alicante ',
         'Almería ',
         'Ávila ',
         'Badajoz ',
         'Barcelona ',
         'Bilbao ',
         'Burgos ',
         'Cáceres ',
         'Cádiz ',
         'Castellón de la Plana ',
         'Ceuta ',
         'Ciudad Real ',
         'Córdoba ',
         'Cuenca ',
         'Gerona ',
         'Granada ',
         'Guadalajara ',
         'Huelva ',
         'Huesca ',
         'Jaén ',
         'La Coruña ',
         'Las Palmas de Gran Canaria ',
         'León ',
         'Lérida ',
         'Logroño ',
         'Lugo ',
         'Madrid ',
         'Málaga ',
         'Melilla ',
         'Mérida ',
         'Murcia ',
         'Orense ',
         'Oviedo ',
         'Palencia ',
         'Palma ',
         'Pamplona ',
         'Pontevedra ',
         'Salamanca ',
         'San Sebastián ',
         'Santa Cruz de Tenerife ',
         'Santander ',
         'Santiago de Compostela ',
         'Segovia ',
         'Sevilla ',
         'Soria ',
         'Tarragona ',
         'Teruel ',
         'Toledo ',
         'Valencia ',
         'Valladolid ',
         'Vitoria ',
         'Zamora ',
         'Zaragoza ',
    ]
}

const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'SHOW_MENU':
            return {
                ...state,
                menuType: 'CITIES'
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
