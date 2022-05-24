import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='border-2 border-solid-black'>
            <div className='xs:pl-3 sm:pl-3 lg:pl-12 bg-neutral flex justify-start flex-col pb-16 h-vh'>
                <h1 className='text-3xl pt-2'>Manage Users and Admins</h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Previllage</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
        </div >
    );
};

export default MakeAdmin;