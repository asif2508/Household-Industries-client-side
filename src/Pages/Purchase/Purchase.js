import React from 'react';
import Loading from 'react-loading';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const { isLoading, data:purchaseItem } = useQuery('purchaseItem', ()=> fetch(`http://localhost:5000/products/${id}`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    const {name} = purchaseItem;
    return (
        <div>
            <h1>This is purchase {name}</h1>
        </div>
    );
};

export default Purchase;