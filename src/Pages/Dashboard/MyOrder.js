import React from 'react';

const MyOrder = ({myorder}) => {
    const {product_name, product_id, quantity, newTransactionId, totalPrice} = myorder;
    return (
        <tr>
            <th><p>{product_id}</p></th>
            <td><p>{product_name}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${totalPrice}</p></td>
            <td>{!newTransactionId ? <button class="btn btn-secondary btn-sm">Pay</button > : <p>Paid</p>}</td>
            <td>{!newTransactionId ? <button class="btn btn-secondary btn-sm">Cancel</button > : <p>Unavailable</p>}</td>
        </tr>
    );
};

export default MyOrder;