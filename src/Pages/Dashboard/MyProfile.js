import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div className='border-2 border-solid-black'>
            <div className='xs:pl-3 sm:pl-3 lg:pl-12 bg-neutral flex justify-start flex-col pb-16'>
                <h1 className='text-4xl font-bold mt-3'>My Profile</h1>
                <div className="avatar mt-8">
                    <div className="w-24 mask mask-squircle">
                        <img src={user.photoURL ? user.photoURL : 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb24lMjBtYXJrJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500'} />
                    </div>
                </div>
                <div className='mt-6'>
                    <form>
                        <div className="form-control w-full max-w-xs mb-5">
                            <p className='text-left mb-2'>Name</p>
                            <input type="text" placeholder={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <p className='text-left mb-2'>Email</p>
                            <input type="email" placeholder={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <p className='text-left mb-2'>Phone</p>
                            <input type="text" placeholder={user.phoneNumber ? user.phoneNumber : "add a phone number"} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <input className="btn btn-secondary" type="submit" value="Update" />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;