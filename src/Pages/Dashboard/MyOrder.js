import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({myorder}) => {
    const {_id, product_name, product_id, quantity, newTransactionId, totalPrice, email} = myorder;
    const handleDeleteItem = ()=>{
        fetch(`http://localhost:5000/orders/${_id}`, {
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
            <th><p>{product_id}</p></th>
            <td><p>{product_name}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${totalPrice}</p></td>
            <td>{!newTransactionId ? <Link to={`/pending/${_id}?&totalPrice=${totalPrice}&quantity=${quantity}`} class="btn btn-secondary btn-sm">Pay</Link> : <p>Paid</p>}</td>
            <td>{!newTransactionId ? <button onClick={handleDeleteItem} class="btn btn-secondary btn-sm">Cancel</button > : <p>Unavailable</p>}</td>
        </tr>
    );
};

export default MyOrder;