import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { toast } from 'react-toastify';
const stripePromise = loadStripe('pk_test_51L33S2Lc3FrHqLv7SfLbiwAnkW4Clt56SXVvo1HsynyEPzanLTFqLeae6saAfUb9z8ACtnZuXlBeaWbpMk8G1OwH00GVmF7AnE');

const Pending = () => {
    const [newTransactionId, setnewTransactionId] = useState(null);
    const { _id } = useParams();
    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get("totalPrice");
    const handlePayment = () => {
        const data = {
            newTransactionId: newTransactionId
        }
        console.log(data);
        fetch(`https://radiant-mountain-55714.herokuapp.com/orders/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => {
                if (res.ok) {
                    toast.info('Your order has been confirmed!');
                    return res.json()
                } else {
                    return toast("failed to order");
                }
            })
            .then(data => console.log(data))
    }
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-primary shadow-xl mt-16 mb-16">
                <div className="card-body">
                    <h1 className='text-xl text-center font-bold p-3'>Pay for Confirm Order</h1>
                    {/* <p>Total bill: ${totalPrice}</p> */}
                    <div className=' text-left p-6'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm newTransactionId={newTransactionId} setnewTransactionId={setnewTransactionId} totalPrice={totalPrice} />
                        </Elements>
                        <div className="card-actions justify-end">
                            <button onClick={handlePayment} className="btn btn-secondary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pending;