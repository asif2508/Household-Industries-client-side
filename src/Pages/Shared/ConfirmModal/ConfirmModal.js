import React from 'react';

const ConfirmModal = (props) => {
    const {_id} = props;
    console.log(_id);
    const handleDeleteItem = (_id)=>{
        fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
        }
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label  onClick={()=>handleDeleteItem(_id)} for="delete-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;