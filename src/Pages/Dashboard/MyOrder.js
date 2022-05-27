import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({myorder}) => {
    const {product_name, product_id, quantity, newTransactionId, totalPrice, email} = myorder;
    return (
        <tr>
            <th><p>{product_id}</p></th>
            <td><p>{product_name}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${totalPrice}</p></td>
            <td>{!newTransactionId ? <Link to={`/pending/${product_id}?quantity=${quantity}&email=${email}&totalPrice=${totalPrice}`} class="btn btn-secondary btn-sm">Pay</Link> : <p>Paid</p>}</td>
            <td>{!newTransactionId ? <button class="btn btn-secondary btn-sm">Cancel</button > : <p>Unavailable</p>}</td>
        </tr>
    );
};

export default MyOrder;