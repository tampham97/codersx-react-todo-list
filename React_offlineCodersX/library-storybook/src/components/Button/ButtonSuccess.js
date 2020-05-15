import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css'
export default class ButtonSuccess extends Component {
    render() {
        const {children, link} = this.props
        return (
            <a href={link} className='btn btn-success'>
                {children}
            </a>
        )
    }
}

ButtonSuccess.propTypes = {
    link: PropTypes.string,
    children: PropTypes.string.isRequired,
}
