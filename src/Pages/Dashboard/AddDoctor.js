import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {
        data:services,
        isLoading
    } = useQuery('service', () => fetch('http://localhost:5000/services')
        .then(res => res.json()))
        
    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }
        
    const imgStorageKey = '5160cba16c24511ab31aeff78bde3552';
    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {  
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization:`Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctor', inserted);
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Faild to add the doctor');
                            }
                    })
                }
        })

        console.log('data', data);
        
    };


    return (
        <div>
            <h1>Add Doctors</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter name here"
                        className="input input-bordered w-full max-w-xs"
                        {
                        ...register("name", {
                            required: {
                                value: true,
                                message:'Name is required'
                                }
                            })
                        }
                    />    
                    <label className="label">
                        {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="input input-bordered w-full max-w-xs"
                        {
                        ...register("email", {
                            required: {
                                value: true,
                                message:'email is required'
                                },
                                pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                                }
                            })
                        }
                    />    
                    <label className="label">
                        {errors.email?.type === 'required' && <p className='text-red-400'>{errors.email.message}</p>}
                        {errors.email?.type === 'pattern' && <p className='text-red-400'>{errors.email.message}</p>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => < option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                        
                    </select>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Upload Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input w-full max-w-xs"
                        {
                        ...register("photo", {
                            required: {
                                value: true,
                                message:'Photo is required'
                                }
                            })
                        }
                    />    
                    <label className="label">
                        {errors.photo?.type === 'required' && <p className='text-red-400'>{errors.photo?.message}</p>}
                    </label>
                </div>

                <input type="submit" value="Add" className='btn btn-accent text-white font-bold w-full max-w-xs mt-5' />

            </form>
        </div>
    );
};

export default AddDoctor;