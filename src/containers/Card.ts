import { connect } from 'react-redux'

import Card from '../components/Card'

export default connect(
    function mapStateToProps(state: any, ownProps: any) {
        return {
            ...state.cards[ownProps.card],
            id: ownProps.card
        }
    },
    function mapDispatchToProps(dispatch, ownProps: any) {
        return {
            close() {
                dispatch({
                    type: 'CLOSE_CARD',
                    card: ownProps.card
                })
            }
        }
    }
)(Card)
