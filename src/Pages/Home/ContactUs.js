import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div className='my-24 py-12' style={{
            background: `url(${appointment})`
            }}>
            <div className='text-center my-12'>
                <h2 className='text-xl text-secondary font-bold'>Contact Us</h2>
                <h1 className='text-white text-4xl md:text-5xl font-semibold'>Stay connected with us</h1>
            </div>
            <section className='flex justify-center items-center'>
                <div className="form-control w-full max-w-sm ">
                    {/* <!-- sm --> */}
                    <input type="text" placeholder="Email address" className="mb-4 input input-bordered input-md w-full max-w-sm" />
                    {/* <!-- md --> */}
                    <input type="text" placeholder="Subject" className="mb-4 input input-bordered input-md w-full max-w-sm" />
                    {/* <!-- lg --> */}
                    <textarea className="mb-4 textarea textarea-bordered h-36" placeholder="Your Message"></textarea>
                    {/* button */}
                    <div className='mx-auto'><PrimaryButton><span className='px-16'>Submit</span></PrimaryButton></div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;