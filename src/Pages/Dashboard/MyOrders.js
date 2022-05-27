import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const {email} = user;
    const [myorders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myorders/${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[myorders, user]);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pay</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders?.map(myorder => <MyOrder
                            key={myorder._id}
                            myorder={myorder}
                            ></MyOrder>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;