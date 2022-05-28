import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[orders]);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Ordered by</th>
                            <th>Status</th>
                            <th>Delete/Shift</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <ManageOrder
                            key={order._id}
                            order={order}
                            ></ManageOrder>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;