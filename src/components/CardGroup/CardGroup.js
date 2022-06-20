import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../Card/Card';

const CardGroup = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 992 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 991, min: 577 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='container mt-5'>
            <div>
            <Carousel responsive={responsive}>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </Carousel>
            </div>
            
        </div>
    );
};

export default CardGroup;