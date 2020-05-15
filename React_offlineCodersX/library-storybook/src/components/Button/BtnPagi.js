import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
export default class BtnPagi extends Component {
    render() {
        const { link ,number} = this.props
        return (
            <div className='btn-icon btn-default'>
                <a href={link} className='btn-link'>
                    <span>{number}</span>
                </a>
            </div>

        )
    }
}

BtnPagi.propTypes = {
    number: PropTypes.number.isRequired,
    link: PropTypes.string,
}
