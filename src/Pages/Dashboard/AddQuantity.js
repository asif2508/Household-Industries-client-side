import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddQuantity = () => {
    const { _id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/manage/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id, product]);
    const { name, img, desc, minimum, available, price } = product;

    const handleIncreaseQuantity = event => {
        event.preventDefault();
        const newquantity = event.target.quantity.value;
        const updatedQuantity = parseInt(available) + parseInt(newquantity);
        const data = {
            available: updatedQuantity
        }
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    toast.info('Quantity Increased Successfully!');
                    return res.json()
                } else {
                    return toast.error("Failed to update Quantity!");
                }
            })
            .then(data => console.log(data))
        event.target.reset();
    }
    const handleUpdatePrice = event => {
        event.preventDefault();
        const newPrice = event.target.price.value;
        const updatedPrice = parseInt(newPrice);
        const data = {
            price: updatedPrice
        }
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    toast.info('Quantity Increased Successfully!');
                    return res.json()
                } else {
                    return toast.error("Failed to update Quantity!");
                }
            })
            .then(data => console.log(data))
        event.target.reset();
    }

    const handleMinimumOrder = event => {
        event.preventDefault();
        const newMinimum = event.target.minimum.value;
        const updatedMinimum = parseInt(newMinimum);
        const data = {
            minimum: updatedMinimum
        }
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    toast.info('Quantity Increased Successfully!');
                    return res.json()
                } else {
                    return toast.error("Failed to update Quantity!");
                }
            })
            .then(data => console.log(data))
        event.target.reset();
    }
    return (
        <div className='pb-12 pt-6 lg:px-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-primary w-100'>
                    <h1 className='text-3xl text-center p-3'>About the Product</h1>
                    <img src={img} alt="" className='w-100' />
                    <div className=' text-left p-6 pr-2'>
                        <h2 class="card-title">{name}</h2>
                        <p>Description: {desc}</p>
                        <p>Minimum Quantity to order: {minimum}</p>
                        <p>Total available products: {available}</p>
                        <p>Price per unit: ${price}</p>
                    </div>
                </div>
                <div className='bg-primary w-100 pl-6'>
                    <h1 className='text-3xl text-center p-3'>Increase Quantity</h1>
                    <form onSubmit={handleIncreaseQuantity}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='quantity' placeholder='Number should be Increased' type="number" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs mt-3">
                            <input type="submit" value='Increase' class="btn btn-secondary w-full max-w-xs" />
                        </div>
                    </form>
                    <h3 className="text-3xl mt-32 font-['Open_Sans']"><blockquote>"A thing of beauty is joy forever."</blockquote></h3>
                </div>
                <div className='grid sm:grid-cols-1 grid md:grid-cols-1 grid lg:grid-cols-1 gap-5'>
                    <div className='bg-primary w-100 pl-6'>
                        <h1 className='text-3xl text-center p-3'>Update Price</h1>
                        <form onSubmit={handleUpdatePrice}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Price Per Unit</span>
                                </label>
                                <input name='price' placeholder='New Price' type="number" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs mt-3">
                                <input type="submit" value='Update' class="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </form>

                    </div>
                    <div className='bg-primary w-100 pl-6'>
                        <h1 className='text-3xl text-center p-3'>Update Minimum Order Quantity</h1>
                        <form onSubmit={handleMinimumOrder}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Minimum Order</span>
                                </label>
                                <input name='minimum' placeholder='New minimum Order Quantity' type="number" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs mt-3">
                                <input type="submit" value='Update' class="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQuantity;