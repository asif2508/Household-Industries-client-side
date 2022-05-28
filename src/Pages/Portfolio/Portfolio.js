import React, { useEffect, useState } from 'react';
import me from '../../images/me.jpg';
import Projects from './Projects';
import Skills from './Skills';
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Portfolio = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div className='lg:px-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='text-left pt-28'>
                    <h1 className='text-3xl font-bold'>Hi There,</h1>
                    <h3 className='text-xl'>I am Rakibul Hasan Asif. I am a passionate full-stack web application developer with a hardworking and always learning mentality. Now I am studying BSc in Software Engineering at Yangzhou University in China. My goal is to be a professional software architect and I am working hard toward that. </h3>

                </div>
                <div>
                    <div className="avatar px-28 py-5">
                        <div className="w-49 rounded-full">
                            <img src={me} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-32 mb-12'>
                <h1 className='text-3xl mt-6 font-bold mb-5'>My Skills</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        skills.map((skill, index) => <Skills
                            key={index}
                            skill={skill}
                        ></Skills>)
                    }
                </div>
            </div>
            <div>
                <Projects></Projects>
            </div>

            <div className='mt-32 mb-16'>
                <h1 className='text-3xl mt-6 font-bold mb-5'>Contact me</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    <div className='bg-primary rounded-md hover:bg-secondary hover:pointer flex justify-around items-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faLocation}></FontAwesomeIcon>
                        <h1 className='text-xl font-bold p-5'>Dinajpur, Bangladesh</h1>
                    </div>
                    <div className='bg-primary rounded-md hover:bg-secondary hover:pointer flex justify-around items-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faEnvelope}></FontAwesomeIcon>
                        <h1 className='text-xl font-bold p-5'>asifrakibulhasan4@gmail.com</h1>
                    </div>
                    <div className='bg-primary rounded-md hover:bg-secondary hover:pointer flex justify-around items-center'>
                        <FontAwesomeIcon className='text-2xl' icon={faPhone}></FontAwesomeIcon>
                        <h1 className='text-xl font-bold p-5'>+8801885056850</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;