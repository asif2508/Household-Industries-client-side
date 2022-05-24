import React from 'react';
import { toast } from 'react-toastify';

const Users = ({index,user}) => {
    const {email, role} = user;
    const handleAdmin =()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method: "PUT",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.info('New Admin added');
            }else{
                toast.error('You are not authorized to do.')
            }
        })
    }
    return (
        <tr>
            <th>#</th>
            <td><p  className='text-accent'>{email}</p></td>
            <td><button onClick={handleAdmin} class="btn btn-sm btn-secondary" disabled={role ==='admin' && 'disabled'}>Make Admin</button></td>
            <td><button class="btn btn-sm btn-secondary">Delete</button></td>
        </tr>
    );
};

export default Users;