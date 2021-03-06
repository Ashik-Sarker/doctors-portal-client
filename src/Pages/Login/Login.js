import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || gUser);
    
    let errorMessage;
    if (error || gError) {
        errorMessage = <p><small className='text-red-500'>{error?.message || gError.message}</small></p>
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    },[token,from,navigate])

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">LogIn</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                        <input type="submit" value="Login" className='btn btn-accent text-white font-bold w-full max-w-xs mt-5' />
                    </form>
                    <p>Are you new? <Link to={'/registration'}><small className='text-primary'>Registration First</small></Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;