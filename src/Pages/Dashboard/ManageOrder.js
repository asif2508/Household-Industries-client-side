import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faTrash, faShippingFast } from '@fortawesome/free-solid-svg-icons';
const ManageOrder = ({order}) => {
    const {_id, product_name, product_id, quantity, newTransactionId, totalPrice, email} = order;

    const handleDeleteItem = ()=>{
        fetch(`https://radiant-mountain-55714.herokuapp.com/orders/${_id}`, {
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
            <td><p>{product_name}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${totalPrice}</p></td>
            <td><p>{email}</p></td>
            <td>{!newTransactionId ? <p>Unpaid</p> : <p>Paid</p>}</td>

            <td>{newTransactionId ? <button className="btn btn-secondary btn-sm"><FontAwesomeIcon icon={ faShippingFast }></FontAwesomeIcon></button > : <button onClick={handleDeleteItem} className="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button >}</td>
        </tr>
    );
};

export default ManageOrder;