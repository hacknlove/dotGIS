const loadCity = function (state: any = {}, action: any) {
    return {
        ...state,
        [action.data.city.id]: {
            name: action.data.city.name,
            data: action.data.list,
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
