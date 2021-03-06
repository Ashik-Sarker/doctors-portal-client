import React from 'react';
import { toast } from 'react-toastify';

const ManageDoctorsRow = ({doctor, index, refetch}) => {
    const { name, email, specialty, img } = doctor;

    const handleDelete = email => {
        const url = `http://localhost:5000/doctor/${email}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted`)
                    refetch();
            }
        })
    }

    return (
        <tr> 
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={()=>handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default ManageDoctorsRow;