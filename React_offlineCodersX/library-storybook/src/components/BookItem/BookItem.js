import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './BookItem.css';
import Button from '../Button/Button'
export default class BookItem extends Component {
    render() {
        const {title, coverUrl, desc} = this.props;
        return (
            <div className='card'>
                <div className='card-cover'>
                    <img className='card-img' src={coverUrl}  alt="..."/>
                </div>
                <div className='card-body'>
                    <div className='card-detail'>
                        <div className='card-title'>{title}</div>
                        <div className='card-desc'>{desc}</div>
                    </div>
                    <Button>View</Button>
                </div>
            </div>
        )
    }
}
BookItem.defaultProps={
    
    coverUrl: "https://nnp.wustl.edu/img/bookCovers/genericBookCover.jpg"
}
BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    /**  Default Cover Book */
    coverUrl: PropTypes.string,
}
