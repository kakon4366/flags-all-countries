import React, { useEffect, useState } from 'react';
import Flag from '../Flag/Flag';

const Flags = () => {
    const [flags, setFlags] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setFlags(data)) //asynchronous
    }, [])
    
    return (
        <div>
            <h1>All Countires Flags!!!</h1>
            <hr />
            <h4>Total Country: {flags.length}</h4>
            {
                flags.map(flag => <Flag flag={flag}></Flag>)
            }
        </div>
    );
};

export default Flags;