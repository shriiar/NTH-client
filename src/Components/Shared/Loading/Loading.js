import React from 'react';
import { HashLoader } from 'react-spinners';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-spinner'>
            <HashLoader></HashLoader>
        </div>
    );
};

export default Loading;