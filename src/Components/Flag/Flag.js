import React from 'react';
import './Flag.css';

const Flag = (props) => {
    const {flags, name} = props.flag;
    return (
        <div className='flag'>
            <img src={flags.png} alt="" />
            <div className='flag-detail'>{name.common}</div>
        </div>
        
    );
};

export default Flag;