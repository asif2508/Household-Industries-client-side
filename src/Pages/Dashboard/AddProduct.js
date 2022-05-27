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
        fetch(`http://localhost:5000/prodcuts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return toast("failed to review");
                }
            })
            .then(data => console.log(data))
        toast('Review Added Successfully');
        event.target.reset();
    }
    return (
        <div className='flex justify-center mt-16 mb-32'>
            <div class="bg-primary p-6 shadow-xl rounded-md">
                <div class="">
                    <h2 class="text-center text-2xl mb-4">Add a Product</h2>
                    <div class="">
                        <form onSubmit={handleAddProduct} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>

                            <div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Name</p>
                                    <input type="text" name='name' placeholder='Product Name' class="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Description</p>
                                    <textarea name='desc' type="text" placeholder='Description' class="textarea textarea-bordered h-32 w-full max-w-xs" required />
                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Minimum amount to Order</p>
                                    <input type='number' name='minimum' placeholder='Minimum Amount to Order' class="input input-bordered w-full max-w-xs" required />
                                </div>

                            </div>
                            <div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Available Products</p>
                                    <input type='number' name='available' placeholder='Available Products' class="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Price per Unit</p>
                                    <input type='number' name='price' placeholder='Price per Unit' class="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div class="form-control w-full max-w-xs mb-5">
                                    <p className='text-left mb-2'>Image Url</p>
                                    <input type="text" name='img' placeholder='Image Url of Product' class="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div class="form-control w-full max-w-xs mb-5 mt-8">
                                    <input class="btn btn-secondary" type="submit" value="Add" />
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