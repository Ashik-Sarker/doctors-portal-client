import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            header: "Fluoride Treatment",
            paragraph:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            img: cavity,
            header: "Cavity Filling",
            paragraph:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            img: whitening,
            header: "Teeth Whitening",
            paragraph:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <div className='mt-36 mx-8'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold'>OUR SERVICES</h3>
                <h4 className='text-4xl'>Services We Provide</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;