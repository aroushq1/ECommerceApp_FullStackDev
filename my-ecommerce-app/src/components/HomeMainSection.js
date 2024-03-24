import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../data/reviews.js';

function HomeMainSection() {
    const navigate = useNavigate();
    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        const randomReviews = getRandomReviews(2);
        setCustomerReviews(randomReviews);
    }, []);

    function getRandomReviews(numReviews) {
        const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
        return shuffledReviews.slice(0, numReviews);
    }

    function handleButtonClick() {
        navigate("/products");
    }

    function generateStars(numStars) {
        let stars = '';
        for (let i = 0; i < numStars; i++) {
            stars += '★';
        }
        return stars;
    }

    return (
        <div style={{ margin: '10px'}} >
            <section>
                <h2>About Us</h2>
                <p> 
                    Welcome to our online store. We are passionate about providing high quality products and exceptional customer service Learn more about our commitment to your satisfaction <br />
                </p>
                <h2>Our Mission</h2>
                <p> 
                    To revolutionize online shopping by providing a seamless and personalized experience, empowering customers to discover and purchase products they love while delivering exceptional service and value.
                </p>
                <h2>Vision</h2>
                <p> 
                    Our vision is to become the preferred destination for online shopping, known for our innovation, reliability, and commitment to enhancing the lives of our customers through accessible and delightful shopping experiences. We aim to continually push boundaries, leveraging cutting-edge technology and customer insights to shape the future of ecommerce and inspire meaningful connections between people and products.
                </p>
            </section>
            <section>
                <button onClick={handleButtonClick}>Shop now</button>
            </section>
            <section>
                <h2>Customer Reviews</h2>
                {customerReviews.map((review, index) => (
                    <div key={index}>
                        <div>{review.customerName}</div>
                        <div>{review.reviewContent}</div>
                        <div><p>Rating: {generateStars(review.stars)} </p></div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomeMainSection;
