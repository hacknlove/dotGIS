import { createStore, combineReducers } from 'redux'

import '../openweathermap'

import initialState from './init.json'

import menuCityShow from './menuCityShow'
import cards from './cards'

const reducer = combineReducers({
    menuCityShow,
    cards
}) as any

const store = createStore(reducer, initialState)

export default store

process.env.NODE_ENV === 'development' && store.subscribe(() => console.log(store.getState()))
