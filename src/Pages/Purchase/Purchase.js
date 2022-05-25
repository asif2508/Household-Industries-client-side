import React, { useState } from 'react';
import Loading from 'react-loading';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const stripePromise = loadStripe('pk_test_51L33S2Lc3FrHqLv7SfLbiwAnkW4Clt56SXVvo1HsynyEPzanLTFqLeae6saAfUb9z8ACtnZuXlBeaWbpMk8G1OwH00GVmF7AnE');

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [transactionId, setTransactionId] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const { isLoading, data: purchaseItem } = useQuery('purchaseItem', () => fetch(`http://localhost:5000/products/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, img, desc, name, price, minimum, available } = purchaseItem;
    const {displayName, email} = user;

    const handleOrderSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const product_id = event.target.product_id.value;
        const product_name = event.target.product_name.value;
        const quantity = event.target.quantity.value;
        const total_price = event.target.total_price.value;
        const transection_Id = event.target.transection_id.value;
        const data ={
            name, email, product_id, product_name, quantity, total_price, transection_Id
        }
        console.log(data);
    }
    return (
        <div className='flex justify-center mt-12 mb-16'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                <div className='bg-primary w-100'>
                    <h1 className='text-3xl text-center p-3'>About the Product</h1>
                    <img src={img} alt="" className='w-100' />
                    <div className=' text-left p-6 pr-0'>
                        <h2 class="card-title">{name}</h2>

                        <p>Minimum Quantity to order: {minimum}</p>
                        <p>Total available products: {available}</p>
                        <p>Price per unit: ${price}</p>
                    </div>
                </div>
                <div className='bg-primary w-100'>
                    <h1 className='text-3xl text-center p-3'>Your order details</h1>
                    <div className=' text-left p-6 pr-0'>
                        <form onSubmit={handleOrderSubmit}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input name='name' disabled='true' type="text" value={displayName} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' disabled='true' type="text" value={email} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Product Id</span>
                                </label>
                                <input name='product_id' disabled='true' type="text" value={_id} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Product Name</span>
                                </label>
                                <input name='product_name' disabled='true' type="text" value={name} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Order Quantity</span>
                                </label>
                                <input name='quantity' type="text" placeholder={`min ${minimum} to max ${available}`} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Total price</span>
                                </label>
                                <input name='total_price' type="text" value={totalPrice} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Transaction Id</span>
                                </label>
                                <input name='transaction_id' value={transactionId} type="text" placeholder='Transaction Id' class="input input-bordered w-full max-w-xs" />
                            </div>

                            <div class="form-control w-full max-w-xs mt-3">
                                <input type="submit" value='Order Now' class="btn btn-secondary w-full max-w-xs" />
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div class="card w-96 bg-primary shadow-xl">
                    <div class="card-body text-accent">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm purchaseItem={purchaseItem} transactionId={transactionId} setTransactionId={setTransactionId} totalPrice={totalPrice} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;