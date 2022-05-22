import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSackDollar, faStar, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div>
            <h1 className='text-3xl mb-8 font-bold'>Business Summary</h1>
            <div class="stats shadow bg-primary  w-full">

                <div class="stat">
                    <div class="stat-figure text-white">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div class="stat-title">Customers</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faSackDollar}></FontAwesomeIcon>
                    </div>
                    <div class="stat-title">Revenue</div>
                    <div class="stat-value">$ 120M</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">33K+</div>
                    <div class="stat-desc">↗︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faScrewdriverWrench}></FontAwesomeIcon>
                    </div>
                    <div class="stat-title">Tools</div>
                    <div class="stat-value">50+</div>
                    <div class="stat-desc">↗︎ 30 (67%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;