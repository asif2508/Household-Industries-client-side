import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSackDollar, faStar, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div>
            <h1 className='text-3xl mb-8 font-bold'>Business Summary</h1>
            <div className="stats shadow bg-primary  w-full">

                <div className="stat">
                    <div className="stat-figure text-white">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">100+</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faSackDollar}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">$ 120M</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">33K+</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faScrewdriverWrench}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">Tools</div>
                    <div className="stat-value">50+</div>
                    <div className="stat-desc">↗︎ 30 (67%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;