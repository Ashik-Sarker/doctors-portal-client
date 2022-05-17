import React from 'react';
import { useQuery } from 'react-query';
import User from './User';

const Users = () => {
    const {
        data: users,
        isLoading,
        refetch
    } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        )
    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }
    
    return (
        <div>
            <h2 className='text-2xl'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;