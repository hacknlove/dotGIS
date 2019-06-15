export default (state: boolean = false, action: any): any => {
    if (action.type !== 'TOOGLE_MENU') return state

    return !state
}
