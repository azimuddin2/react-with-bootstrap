import React from 'react';

const Card = (props) => {
    const { img, name, price } = props.card;

    return (
        <div className='m-3'>
            <div className='border p-3 rounded-3'>
                <img className='w-100 rounded-3' src={img} alt="" />
                <h2>{name}</h2>
                <p className='fs-4'>${price}</p>
                <button className='btn btn-warning text-light px-3'>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;