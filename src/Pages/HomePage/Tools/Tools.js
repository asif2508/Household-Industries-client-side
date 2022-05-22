import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='bg-base-100'>
            <h1 className='text-3xl text-accent mb-6 font-bold'>Available Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:mx-12 lg:mx-12'>
                {
                    tools.map(tool => <Tool
                    
                    tool = {tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;