import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-secondary'>Available Appointment on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12'>
                {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    date={date}
                ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;