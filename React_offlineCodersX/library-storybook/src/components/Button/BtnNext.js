import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import btnNext from '../../../public/next.svg'
export default class BtnNext extends Component {
    render() {
        const { link } = this.props
        return (
            <div className='btn-icon btn-default'>
                <a href={link} className='btn-link'>
                    <img src={btnNext} alt='...' className='' />
                </a>
            </div>

        )
    }
}

BtnNext.propTypes = {
    link: PropTypes.string,
}
