import React from 'react';
const Skills = ({skill}) => {
    const {name} = skill;
    return (
        <div className='bg-primary rounded-md hover:bg-secondary hover:pointer'>
            <h1 className='text-xl font-bold p-5'>{name}</h1>
        </div>
    );
};

export default Skills;