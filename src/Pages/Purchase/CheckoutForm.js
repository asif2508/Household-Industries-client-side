import React, { useEffect, useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';
const CheckoutForm = ({ newTransactionId, setnewTransactionId, totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [transactionId, setTransactionId] = useState('');
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    
    const [user] = useAuthState(auth)
    // const { price } = purchaseItem;
    let price = totalPrice;
    const { name, email } = user;
    useEffect(() => {
        fetch('https://radiant-mountain-55714.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])
    if(processing){
        return <Loading></Loading>
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
        }
        else {
            setCardError('');
        }
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setnewTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            toast.info('We have received your payment. Confirm now!')
            setSuccess('Thank you. We have received your payment')


        }
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffffff',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-secondary mt-3'>{cardError}</p>
            }
            {
                // success && <div className='text-secondary mt-3'>
                //     <p>{success}  </p>
                //     <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                // </div>
            }
        </div>
    );
};

export default CheckoutForm;