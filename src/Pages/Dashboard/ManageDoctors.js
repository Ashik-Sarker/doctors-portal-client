import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const {
        data: doctors,
        isLoading
    } =
        useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
            .then(res => res.json())
        )

    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }
    return (
        <div>
            <h1>Manage Doctors: {doctors.length}</h1>
        </div>
    );
};

export default ManageDoctors;