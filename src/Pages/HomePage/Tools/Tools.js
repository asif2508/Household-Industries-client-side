import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Tool from '../Tool/Tool';

const Tools = () => {
    
    const { isLoading, data:tools } = useQuery('tools', ()=> fetch('https://radiant-mountain-55714.herokuapp.com/products').then(res => res.json()));
    if(isLoading){
        return <button className="btn btn-square loading"></button>
    }
    return (
        <div className='bg-base-100'>
            <h1 className='text-3xl text-accent mb-6 font-bold'>Available Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:mx-12 lg:mx-12'>
                {
                    tools?.slice(0,4).map(tool => <Tool
                    key={tool._id}
                    tool = {tool}
                    ></Tool>)
                }
            </div>
            <Link to='/allproduct' className="btn btn-secondary mt-6">SEE ALL PRODUCTS</Link>
        </div>
    );
};

export default Tools;