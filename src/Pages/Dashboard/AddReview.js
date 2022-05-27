import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL } = user;
    const handleAddReview =(event)=>{
        event.preventDefault()
        const desc = event.target.desc.value;
        const rating = event.target.rating.value;
        const data = {
            name: displayName,
            desc: desc,
            rating: rating,
            img: photoURL
        }
        fetch(`http://localhost:5000/reviews`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                return toast("failed to review");
            }
        })
        .then(data => console.log(data))
        toast('Review Added Successfully');
    event.target.reset();
    }

    return (
        <div className='flex justify-center mt-16 mb-32'>
            <div class="card w-96 bg-primary shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add a Review</h2>
                    <div class="">
                        <form onSubmit={handleAddReview}>
                            <div class="avatar mt-8">
                                <div class="w-24 mask mask-squircle">
                                    <img src={user.photoURL ? user.photoURL : 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb24lMjBtYXJrJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500'} />
                                </div>
                            </div>
                            <div class="form-control w-full max-w-xs mb-5">
                                <p className='text-left mb-2'>Name</p>
                                <input type="text" disabled={true} value={user?.displayName} class="input input-bordered w-full max-w-xs" required/>
                            </div>
                            <div class="form-control w-full max-w-xs mb-5">
                                <p className='text-left mb-2'>Description</p>
                                <textarea name='desc' type="text" placeholder='Description' class="textarea textarea-bordered h-24 w-full max-w-xs" required/>
                            </div>
                            <div class="form-control w-full max-w-xs mb-5">
                                <p className='text-left mb-2'>Rating</p>
                                <input name='rating' type="number" placeholder='Please Rate between 1 to 5' class="input input-bordered w-full max-w-xs" required/>
                            </div>
                            <div class="form-control w-full max-w-xs mb-5">
                            <input class="btn btn-secondary" type="submit" value="Add" />
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;