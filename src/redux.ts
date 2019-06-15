import { createStore } from 'redux'

import './openweathermap'
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    menuCityShow: false,
    cards: {
    },
    citys: [
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
    ],
    data: [
        'temperatura',
        'temperatura minima',
        'temperatura máxima',
        'presión atmosférica',
        'humedad',
        'velocidad del viento'
    ]
}

const reducer = (state = initialState, action: any) => {
    console.log(action)
    switch (action.type) {
        case 'TOOGLE_MENU':
            return {
                ...state,
                menuCityShow: !state.menuCityShow
            }
        case 'LOAD_CITY':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.data.city.id]: {
                        name: action.data.city.name,
                        data: action.data.list,

                    }
                }
            }
        case 'CLOSE_CHART':
            const cards = {... state.cards} as any
            delete cards[action.card]
            return {
                ...state,
                cards
            }

        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

export default store
