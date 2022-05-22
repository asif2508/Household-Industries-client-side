import React from 'react';
import './tool.css';
const Tool = ({tool}) => {
    const {name, img, desc, minimum, available, price} = tool;
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
                    <button class="btn btn-secondary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;