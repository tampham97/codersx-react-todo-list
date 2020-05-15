import React, { Component } from 'react';
import PropsTypes from 'prop-types'
import './Form.css'
import ButtonSeach from '../Button/ButtonSuccess'
export default class FormSearch extends Component {
    render() {
        const {children} = this.props
        return (
            <div className='form-group'>
                <input className='form-input' type='search' placeholder='Search...' />
                <ButtonSeach>{children}</ButtonSeach>
            </div>
        )
    }
}
FormSearch.propTypes = {
    children : PropsTypes.string.isRequired
}