import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {
        data: services,
        isLoading,
        refetch
    } = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        )
    if (isLoading) {
        return <p className='text-center'>Loading...</p>
    }

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
                treatment && <BookingModal
                    date={date}
                    setTreatment={setTreatment}
                    treatment={treatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;