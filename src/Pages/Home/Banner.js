import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-0 md:px-16">
            <div className="hero-content flex-col lg:flex-row-reverse 2xl:px-2">
                <img src={chair} className="max-w-md 2xl:max-w-3xl 2xl:ml-12 rounded-lg shadow-2xl" alt=''/>
                <div className='md:px-0 mt-6 lg:mt-0'>
                    <h1 className="text-6xl md:text-5xl 2xl:text-7xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 2xl:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;