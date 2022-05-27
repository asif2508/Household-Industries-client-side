import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = ({order}) => {
    const {product_name, product_id, quantity, newTransactionId, totalPrice, email} = order;
    return (
        <tr>
            <td><p>{product_name}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${totalPrice}</p></td>
            <td><p>{email}</p></td>
            <td>{!newTransactionId ? <p>Unpaid</p> : <p>Paid</p>}</td>

            <td>{newTransactionId ? <button class="btn btn-secondary btn-sm">Shift</button > : <button class="btn btn-secondary btn-sm">Cancel</button >}</td>
        </tr>
    );
};

export default ManageOrder;