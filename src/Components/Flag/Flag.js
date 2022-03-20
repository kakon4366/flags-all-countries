import React from 'react';
import './Flag.css';

const Flag = (props) => {
    const {flags} = props.flag;
    return (
        <div>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Flag;