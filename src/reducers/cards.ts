const loadCity = function (state: any = {}, action: any) {
    return {
        ...state,
        [action.data.city.id]: {
            name: action.data.city.name,
            data: action.data.list.map((data: any) => ({
                timestamp: data.dt,
                name: data.dt_txt.substr(5, 8) + 'h',
                temperatura: data.main.temp,
                humedad: data.main.humidity,
            })),
        }
    }
}

export default (state: any = {}, action: any): any => {
    switch (action.type) {
        case 'LOAD_CITY':
            return loadCity(state, action)
        case 'CLOSE_CARD': {
            const cards = { ...state } as any
            delete cards[action.card]

            return cards
        }
        default:
            return state
    }
}
