import React from 'react';
import logo from './dotGIS.svg';
import './Header.scss';

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderPresentation: React.FC = (props: any) => {
    return (
        <header>
            <img src={logo} alt="" />
            <span>
                dotGIS React coding challenge
            </span>
            <div onClick={props.openMenu} >
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </header>
    )
}

const HeaderContainer = connect(
    function mapStateToProps() {
        return null
    },
    function mapDispatchToProps(dispatch, ownProps: any) {
        return {
            openMenu: () => {
                dispatch({
                    type: 'SHOW_MENU'
                })
            }
        }
    }
)(HeaderPresentation)

export default HeaderContainer
