import React from 'react';

const InfoCard = ({ info }) => {
    const { img, heading, paragraph, bgColor } = info;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor} p-6 md:p-8 2xl:py-20`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title font-bold 2xl:text-3xl">{heading}</h2>
                <p>{paragraph}</p>
                <div className="card-actions justify-end"></div>
            </div>
        </div>
    );
};

export default InfoCard;