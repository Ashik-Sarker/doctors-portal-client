import React from 'react';

const Service = ({ service,setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md p-5">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-primary'>No Slots Available</span>
                    }
                </p>
                <p>{slots.length}{slots.length > 1 ? " Spaces" : " Space"} Available</p>
                
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} htmlFor="my-modal" className='btn px-6 py-2 rounded text-white font-bold bg-gradient-to-r from-secondary to-primary border-0' >open modal</label>
                </div>
            </div>
        </div>
    );
};

export default Service;


// {
//     /* <PrimaryButton><span className='px-6'>Book Now</span></PrimaryButton> */ }