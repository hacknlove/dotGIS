import store from './reducers'

export const loadApi = async function (ciudad: string) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=0614d13377e407e8c0724c47d862443b&units=metric&q=${ciudad}`) as any

    if (!data) {
        return
    }

    store.dispatch({
        type: 'LOAD_CITY',
        data: await data.json()
    })
}

loadApi('Barcelona')
loadApi('Madrid')
loadApi('Valencia')
loadApi('Toledo')
loadApi('Oviedo')
loadApi('La Coruña')
