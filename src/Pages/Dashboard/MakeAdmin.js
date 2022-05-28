import React, { useEffect, useState } from 'react';
import Users from './Users';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-mountain-55714.herokuapp.com/users',{
            method: "GET",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    },[users])
    return (
        <div className='border-2 border-solid-black'>
            <div className='xs:pl-3 sm:pl-3 lg:pl-12 bg-neutral flex justify-start flex-col pb-16 h-vh'>
                <h1 className='text-3xl pt-2'>Manage Users and Admins</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(user => <Users
                            key={user._id}
                            user={user}
                            ></Users>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div >
    );
};

export default MakeAdmin;