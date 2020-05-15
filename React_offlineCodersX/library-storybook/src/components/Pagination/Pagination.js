import React, { Component } from 'react';
import PropsTypes from 'prop-types'
import './Pagination.css';
import BtnPrev from '../Button/BtnPrev';
import BtnNext from '../Button/BtnNext';
import BtnPagi from '../Button/BtnPagi';
export default class Pagination extends Component {
    render() {
        const {pageSize} = this.props;
        let result = [...Array(pageSize)].map((x, index) => <BtnPagi key={index} number={index+1}/>)
        return (
            <ul className='pagination'>
                <BtnPrev />
                {result}
                <BtnNext/>
            </ul>
        )
    }
}
Pagination.propTypes = {
    pageSize : PropsTypes.number.isRequired
}