import React from 'react';
import { Link } from 'react-router-dom';
import './tool.css';
const Tool = ({tool}) => {
    const {_id, name, img, desc, minimum, available, price} = tool;
    return (
        <div className="card lg:card-side bg-primary shadow-xl text-white">
            <figure><img src={img} alt="Album" className='tool-img'/></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p><small>{desc}</small></p>
                <p>Minimum Quantity to order: {minimum}</p>
                <p>Total available products: {available}</p>
                <p>Price per unit: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/${_id}`} className="btn btn-secondary">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;