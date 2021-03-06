import React from 'react';
import { useQuery } from 'react-query';
import ManageDoctorsRow from './ManageDoctorsRow';

const ManageDoctors = () => {
    const {
        data: doctors,
        isLoading,
        refetch
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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <ManageDoctorsRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></ManageDoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;