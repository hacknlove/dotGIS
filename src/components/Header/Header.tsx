import React from 'react';
import logo from './dotGIS.svg';
import './Header.scss';

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderPresentation: React.FC = (props: any) => {
    return (
        <header className={props.menuCityShow ? 'open' : 'close'}>
            <img src={logo} alt="" />
            <span>
                dotGIS React coding challenge
            </span>
            <div onClick={() => props.openMenu(props.menuOpen)} >
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </header>
    )
}

const HeaderContainer = connect(
    function mapStateToProps(state: any) {
        return {
            menuCityShow: state.menuCityShow
        }
    },
    function mapDispatchToProps(dispatch, ownProps: any) {
        return {
            openMenu (close:boolean) {
                dispatch({
                    type: 'TOOGLE_MENU'
                })
            }
        }
    }
)(HeaderPresentation)

export default HeaderContainer
