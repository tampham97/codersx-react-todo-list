import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css'
export default class Button extends Component {
    render() {
        const {children, link} = this.props
        return (
            <a href={link} className='btn btn-default'>
                {children}
            </a>
        )
    }
}

Button.propTypes = {
    link: PropTypes.string,
    children: PropTypes.string.isRequired,
}
