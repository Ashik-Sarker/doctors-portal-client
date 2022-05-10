import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExceptionalDental = () => {
    return (
        <div className="hero min-h-screen md:px-20 md:mt-32 2xl:mt-0">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='px-3 md:ml-12'>
                <h1 className="md:text-5xl text-4xl mt-5  md:mt-0 font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="my-2 md:mt-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;