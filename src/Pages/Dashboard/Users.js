import React from 'react';
import { toast } from 'react-toastify';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Users = ({index,user}) => {
    const {_id,email, role} = user;
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
    const handleDeleteItem = ()=>{
        fetch(`http://localhost:5000/users/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
        }
    return (
        <tr>
            <th>#</th>
            <td><p  className='text-accent'>{email}</p></td>
            <td><button onClick={handleAdmin} class="btn btn-sm btn-secondary" disabled={role ==='admin' && 'disabled'}>Make Admin</button></td>
            <td><button onClick={handleDeleteItem} class="btn btn-sm btn-secondary"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
        </tr>
    );
};

export default Users;