import React, { useEffect, useState } from 'react';
import ProductManage from './ProductManage';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products]);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price per Unit</th>
                            <th>Minimum Order</th>
                            <th>Actions</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => <ProductManage
                            key={product.key}
                            product={product}
                            ></ProductManage>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;