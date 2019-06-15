import { connect } from 'react-redux'

import Menu from '../components/Menu'
import { loadApi } from '../openweathermap'

export default connect(
    function mapStateToProps(state: any) {
        return {
            menuCityShow: state.menuCityShow,
            items: state.citys
        }
    },
    function mapDispatchToProps(dispatch, ownProps: any) {
        return {
            loadCity(item: string) {
                loadApi(item)
                dispatch({
                    type: 'TOOGLE_MENU'
                })
            }
        }
    }
)(Menu)
