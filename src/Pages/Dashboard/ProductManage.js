import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ProductManage = ({product}) => {
    const {name, _id, minimum, available, price} = product;
    const handleDeleteItem = ()=>{
        fetch(`http://localhost:5000/products/${_id}`, {
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
            <td><p>{name}</p></td>
            <td><p>{available}</p></td>
            <td><p>{minimum}</p></td>
            <td><p>${price}</p></td>
            <td><Link to={`/addquantity/${_id}`} class="btn btn-secondary btn-sm">Manage</Link ></td>

            <td><button onClick={handleDeleteItem} class="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button ></td>
        </tr>
    );
};

export default ProductManage;