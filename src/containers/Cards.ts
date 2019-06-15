import Cards from '../components/Cards'
import { connect } from 'react-redux'

export default connect(
    function mapStateToProps(state: any) {
        return {
            cards: Object.keys(state.cards)
        }
    }
)(Cards)
