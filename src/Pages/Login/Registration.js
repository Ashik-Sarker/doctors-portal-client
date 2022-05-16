import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';

const Registration = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {register,formState: {errors},handleSubmit} = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    // const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";
    const [token] = useToken(gUser || user)

    let errorMessage;
    if (error || gError) {
        errorMessage = <p><small className='text-red-500'>{error?.message || gError.message}</small></p>
    }

    if (token) {
        // navigate(from, { replace: true });
        navigate('/appointment')
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name});
            alert('Updated profile');
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Registration</h2>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message:'Password is required'
                                        },
                                    minLength: {
                                        value: 6,
                                        message: "Minimum length 6"
                                        }
                                    })
                                }
                            />    
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-red-400'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-400'>{errors.password.message}</p>}
                            </label>
                        </div>
                        {errorMessage}
                        <input type="submit" value="Registration" className='btn btn-accent text-white font-bold w-full max-w-xs mt-5' />

                    </form>
                    <p>Already have an account? <Link to={'/login'}><small className='text-primary'>Login Please</small></Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;