import React from 'react';
import { Carousel } from 'react-bootstrap';
import product1 from '../../Images/product-1.png';
import product2 from '../../Images/product-2.png';
import product3 from '../../Images/product-3.png';

const Banner = () => {
    return (
        <div className='container'>
            <Carousel variant="light">
                <Carousel.Item>
                    <div className='row d-flex align-items-center p-4'>
                        <div className='col-lg-6'>
                            <h1>Macbook Pro</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h2>$55000</h2>
                            <button className='btn btn-warning text-light fw-semibold px-4 mt-2'>Buy Now</button>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                className="w-100"
                                src={product1}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row d-flex align-items-center p-4'>
                        <div className='col-lg-6'>
                            <h1>Amazon Echo</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h2>$10000</h2>
                            <button className='btn btn-info text-light fw-semibold px-4 mt-2'>Buy Now</button>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                className="w-100"
                                src={product2}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row d-flex align-items-center p-4'>
                        <div className='col-lg-6'>
                            <h1>Boom boom boom Box</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h2>$12000</h2>
                            <button className='btn btn-warning text-light fw-semibold px-4 mt-2'>Buy Now</button>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                className="w-100"
                                src={product3}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;