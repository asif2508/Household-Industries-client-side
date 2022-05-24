import React from 'react';
import { Link } from 'react-router-dom';
import './tool.css';
const Tool = ({tool}) => {
    const {_id, name, img, desc, minimum, available, price} = tool;
    return (
        <div class="card lg:card-side bg-primary shadow-xl text-white">
            <figure><img src={img} alt="Album" className='tool-img'/></figure>
            <div class="card-body text-left">
                <h2 class="card-title">{name}</h2>
                <p><small>{desc}</small></p>
                <p>Minimum Quantity to order: {minimum}</p>
                <p>Total available products: {available}</p>
                <p>Price per unit: ${price}</p>
                <div class="card-actions justify-end">
                    <Link to={`/purchase/${_id}`} class="btn btn-secondary">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;