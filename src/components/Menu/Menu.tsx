import React from 'react';
import { connect } from 'react-redux'

import { loadApi } from '../../openweathermap'

import './Menu.scss';

const MenuPresentation: React.FC = (props: any) => {
    if (!props.menuCityShow) {
        return null
    }
    return (
        <nav>
            <ul>
                {
                    props.items.map((item: any) => <li key={item} onClick={() => props.loadCity(item)}>{item}</li>)
                }
            </ul>
        </nav>
    )
}

const MenuContainer = connect(
    function mapStateToProps (state: any) {
        return {
            menuCityShow: state.menuCityShow,
            items: state.citys
        }
    },
    function mapDispatchToProps (dispatch, ownProps: any) {
        return {
            loadCity (item: string) {
                loadApi(item)
                dispatch({
                    type: 'TOOGLE_MENU'
                })
            }
        }
    }
)(MenuPresentation)

export default MenuContainer
