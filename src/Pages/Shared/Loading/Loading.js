import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='flex justify-center'>
            <ReactLoading type={type} color={color} height="100%" width={375} />
        </div>
    );
};

export default Loading;