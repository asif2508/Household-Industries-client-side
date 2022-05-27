import React from 'react';

const ProductManage = ({product}) => {
    const {name, _id, minimum, available, price} = product
    return (
        <tr>
            <td><p>{name}</p></td>
            <td><p>{available}</p></td>
            <td><p>{minimum}</p></td>
            <td><p>${price}</p></td>
            <td><button class="btn btn-secondary btn-sm">Manage</button ></td>

            <td><button class="btn btn-secondary btn-sm">Delete</button ></td>
        </tr>
    );
};

export default ProductManage;