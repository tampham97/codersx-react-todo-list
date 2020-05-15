import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import btnPrev from '../../../public/prev.svg'
export default class BtnPrev extends Component {
    render() {
        const { link } = this.props
        return (
            <div className='btn-icon btn-default'>
                <a href={link} className='btn-link'>
                    <img src={btnPrev} alt='...' className='' />
                </a>
            </div>

        )
    }
}

BtnPrev.propTypes = {
    link: PropTypes.string,
}
