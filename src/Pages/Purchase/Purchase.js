import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
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
import { toast } from 'react-toastify';
const stripePromise = loadStripe('pk_test_51L33S2Lc3FrHqLv7SfLbiwAnkW4Clt56SXVvo1HsynyEPzanLTFqLeae6saAfUb9z8ACtnZuXlBeaWbpMk8G1OwH00GVmF7AnE');

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [newTransactionId, setnewTransactionId] = useState(null);
    const [quantity, setQuantity] = useState(0);
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
    const { displayName, email } = user;

    const handleQuantity = event => {
        const quantity = event.target.value;
        setQuantity(quantity);
        console.log(quantity);
        if (quantity > 0) {
            setTotalPrice(1);
            const total_price = parseInt(quantity) * price;
            setTotalPrice(total_price);
        }
    }
    const handleOrderSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const product_id = event.target.product_id.value;
        const product_name = event.target.product_name.value;
        // const quantity = event.target.quantity.value;
        // const transection_Id = event.target.transection_id.value;
        if (quantity < minimum) {
            setQuantityError('Please Increase the quantity to minimum amount')
            return;
        }
        else if (quantity < minimum) {
            setQuantityError('Insufficient amount!')
            return;
        }

        const data = {
            name: name,
            email: email,
            product_id: product_id,
            product_name: product_name,
            quantity: quantity,
            totalPrice: totalPrice,
            newTransactionId: newTransactionId
        }
        console.log(data);
        fetch(`http://localhost:5000/orders`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                return toast("failed to order");
            }
        })
        .then(data => console.log(data))
        toast('Order Placed Successfully');
        setQuantity(0);
        event.target.pquantity.value = 0;
        event.target.transaction_id.value= null;
        setTotalPrice(0);
        setQuantityError('');
        setnewTransactionId(null);
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
                                <input name='name' disabled={true} type="text" defaultValue={displayName} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' disabled={true} type="text" defaultValue={email} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Product Id</span>
                                </label>
                                <input name='product_id' disabled={true} type="text" defaultValue={_id} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Product Name</span>
                                </label>
                                <input name='product_name' disabled={true} type="text" defaultValue={name} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Order Quantity</span>
                                </label>
                                <input onBlur={handleQuantity} name='pquantity' type="number" placeholder={`min ${minimum} to max ${available}`} class="input input-bordered w-full max-w-xs" />
                                {quantityError && <label class="label">
                                    <span class="label-text">{quantityError}</span>
                                </label>}
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Total price</span>
                                </label>
                                <input disabled={true} name='total_price' type="text" placeholder='Total Price' value={totalPrice} class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Transaction Id</span>
                                </label>
                                <input disabled={true} name='transaction_id' value={newTransactionId} type="text" class="input input-bordered w-full max-w-xs" />
                            </div>

                            <div class="form-control w-full max-w-xs mt-3">
                                <input type="submit" defaultValue='Order Now' class="btn btn-secondary w-full max-w-xs" />
                            </div>

                        </form>
                    </div>
                </div>
                <div className='bg-primary w-100'>
                    <h1 className='text-3xl text-center p-3'>Pay First for Confirm Order</h1>
                    <div className=' text-left p-6'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm newTransactionId={newTransactionId} setnewTransactionId={setnewTransactionId} totalPrice={totalPrice} />
                        </Elements>
                        <div className='mt-6'>
                            <h1 className='text-2xl'>Some Instruction:</h1>
                            <ul>
                                <li><p>At first set the Quantity of the product.</p></li>
                                <li><p>Then Price will be set automatically by unit price.</p></li>
                                <li><p>Then Purchase the payment for confirm Order.</p></li>
                                <li><p>After Payment Your transaction Id will be filled up automatically</p></li>
                                <li><p>Without payment, Your order will be a pending order and you can purchase it later also.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;