import React from 'react';

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
        .then(data => console.log(data))
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