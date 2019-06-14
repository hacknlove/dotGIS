import store from './redux'

export const loadApi = async function (endpoint: string) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/${endpoint}&APPID=0614d13377e407e8c0724c47d862443b`)

    store.dispatch({
        type: 'LOAD_DATA',
        data: data
    })
}

// loadApi('forecast?q=Barcelona&units=metric')
