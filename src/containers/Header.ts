import Header from '../components/Header'
import { connect } from 'react-redux'

export default connect(
    function mapStateToProps(state: any) {
        return {
            menuCityShow: state.menuCityShow
        }
    },
    function mapDispatchToProps(dispatch, ownProps: any) {
        return {
            openMenu(close: boolean) {
                dispatch({
                    type: 'TOOGLE_MENU'
                })
            }
        }
    }
)(Header)
