import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAnAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
            }}
            className='flex justify-center items-center mt-36 2xl:mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px] 2xl:mt-[-220px]' src={doctor} alt="Doctor" />
            </div>
            <div className='flex-1 text-white p-6'>
                <h3 className = 'text-xl mb-2 text-secondary font-bold' > Appointment </h3>
                <h2 className='text-5xl mb-2'>Make an Appointment Today</h2>
                <p className='my-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam distinctio quaerat repellendus iusto nam officiis deserunt consequuntur esse recusandae delectus vel, pariatur quis voluptatum voluptatem temporibus reiciendis quam, alias mollitia?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAnAppointment;