import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl mb-8 font-bold'>Customer Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;