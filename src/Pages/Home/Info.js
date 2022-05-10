import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    console.log(clock);
    const infos = [
        {
            _id:1,
            img: clock,
            heading: "Opening Hours",
            paragraph: "Lorem Ipsum is simply dummy text of the pri",
            bgColor:"bg-gradient-to-r from-secondary to-primary"
        },
        {
            _id: 2,
            img: marker,
            heading: "Opening Hours",
            paragraph: "Lorem Ipsum is simply dummy text of the pri",
            bgColor: "bg-neutral"
        },
        {
            _id: 3,
            img: phone,
            heading: "Opening Hours",
            paragraph: "Lorem Ipsum is simply dummy text of the pri",
            bgColor:"bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-md md:max-w-full mx-auto md:px-8'>
            {
                infos.map(info => <InfoCard
                    key={info._id}
                    info={info}
                ></InfoCard>)
            }
            
        </div>
    );
};

export default Info;