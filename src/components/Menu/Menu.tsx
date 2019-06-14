import React, { MouseEvent } from 'react';
import './Menu.scss';

import { connect } from 'react-redux'

const MenuPresentation: React.FC = (props: any) => {
    if (!props.items) {
        return null
    }
    return (
        <nav>
            <ul>
                {
                    props.items.map((item: any) => <li key="item" onClick={() => props.select(item)}>{item}</li>)
                }
            </ul>
        </nav>
    )
}

const MenuContainer = connect(
    function mapStateToProps (state: any) {
        switch (state.menuType) {
            case 'CITIES':
                return {
                    items: state.ciudades,
                    type: 'SELECT_CITY'
                }
            case 'DATA':
                return {
                    items: state.data,
                    type: 'SELECT_DATA'
                }
            default:
                return null
        }
    },
    function mapDispatchToProps (dispatch, ownProps: any) {
        return {
            select: (item: any) => {
                dispatch({
                    type: ownProps.type,
                    item
                })
            }
        }
    }
)(MenuPresentation)

export default MenuContainer
