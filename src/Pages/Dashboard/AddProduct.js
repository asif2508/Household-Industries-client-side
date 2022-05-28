import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const desc = event.target.desc.value;
        const minimum = event.target.minimum.value;
        const available = event.target.available.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const data = {
            name: name,
            desc: desc,
            minimum: minimum,
            available: available,
            price: price,
            img: img
        }
        fetch(`https://radiant-mountain-55714.herokuapp.com/products`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    toast('Product Added Successfully');
                    return res.json()
                } else {
                    return toast("failed to add product");
                }
            })
            .then(data => console.log(data))
        event.target.reset();
    }
    return (
        <div className='flex justify-center mt-16 mb-32'>
            <div className="bg-primary p-6 shadow-xl rounded-md">
                <div className="">
                    <h2 className="text-center text-2xl mb-4">Add a Product</h2>
                    <div className="">
                        <form onSubmit={handleAddProduct} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>

                            <div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Name</p>
                                    <input type="text" name='name' placeholder='Product Name' className="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Description</p>
                                    <textarea name='desc' type="text" placeholder='Description' className="textarea textarea-bordered h-32 w-full max-w-xs" required />
                                </div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Minimum amount to Order</p>
                                    <input type='number' name='minimum' placeholder='Minimum Amount to Order' className="input input-bordered w-full max-w-xs" required />
                                </div>

                            </div>
                            <div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Available Products</p>
                                    <input type='number' name='available' placeholder='Available Products' className="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Price per Unit</p>
                                    <input type='number' name='price' placeholder='Price per Unit' className="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div className="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Image Url</p>
                                    <input type="text" name='img' placeholder='Image Url of Product' className="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div className="form-control w-full max-w-xs mb-5 mt-8">
                                    <input className="btn btn-secondary" type="submit" value="Add" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;