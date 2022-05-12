import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;


    const handleBooking = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const slot = event.target.slot.value;
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary text-white border-0">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-4">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='date' disabled value={format(date, 'PP')} className="input input-bordered input-accent input-sm w-full max-w-xs" />
                        <select name='slot' className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            } 
                        </select>
                        <input type="text" placeholder="Full Name" name='name' className="input input-bordered input-accent input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered input-accent input-sm w-full max-w-xs" />
                        <input type="email" placeholder="Email" name='email' className="input input-bordered input-accent input-sm w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-40 max-w-xs text-white font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;