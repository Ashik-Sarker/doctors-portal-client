import React from 'react';

const Service = ({ service }) => {
    const { img, header, paragraph } = service;
    return (
        <div className="card mx-auto max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{header}</h2>
                <p>{paragraph}</p>
                <div className="card-actions">
                </div>
            </div>
        </div>
    );
};

export default Service;