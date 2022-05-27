import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Tool from '../HomePage/Tool/Tool';

const AllProduct = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setTools(data))
    },[tools]);
    return (
        <div className='bg-base-100 mb-16'>
            <h1 className='text-3xl text-accent mb-6 mt-4 font-bold'>All the Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:mx-12 lg:mx-12'>
                {
                    tools?.map(tool => <Tool
                    
                    tool = {tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default AllProduct;