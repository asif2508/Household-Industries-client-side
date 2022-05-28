import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Review from '../Review/Review';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-mountain-55714.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews, user]);
    return (
        <div>
            <h1 className='text-3xl mb-8 font-bold'>Customer Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {
                reviews.slice(-3).map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;