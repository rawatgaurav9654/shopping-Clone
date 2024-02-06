import React from 'react';
import "./Home.css";
import Product from './Product';
import Banner from './images/banner.png'
import Image_1 from './images/image-1.png';
import Image_2 from './images/image-2.png';
import Image_3 from './images/image-3.png';
import Image_4 from './images/image-4.png';
import Image_5 from './images/image-5.png';
import Image_6 from './images/image-6.png';
import Footer from './Footer';
function Home() {
    return (
        <div>
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src={Banner} alt="" />

                <div className="home__row">
                    <Product
                    id={1} 
                    title='Effortless elegance meets sunny style in our enchanting floral print sundress, perfect for special occasions and everyday grace.' 
                    price={29.99}
                    image={Image_5}
                    rating={5}
                      />
                    <Product
                    id={2}
                    title='Make a statement with our striking graphic print t-shirt, a bold fashion piece designed to showcase your unique style and personality.' 
                    price={29.99}
                    image={Image_2}
                    rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                    id={3}
                    title='Upgrade your casual game with our versatile denim jeans, offering all-day comfort and a modern slim fit for a timeless look.' 
                    price={199.99}
                    image={Image_1}
                    rating={3}
                    />
                    <Product
                    id={4}
                    title='Elevate your active lifestyle with our high-performance athletic shorts, designed for breathability and flexibility during workouts and daily activities.' 
                    price={98.99}
                    image={Image_3}
                    rating={5}
                    />
                    <Product
                    id={5}
                    title='Command attention with our meticulously tailored navy blazer, a timeless choice for formal events and confident sophistication.' 
                    price={698.99}
                    image={Image_4}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                    id={3}
                    title='Upgrade your casual game with our versatile denim jeans, offering all-day comfort and a modern slim fit for a timeless look.' 
                    price={199.99}
                    image={Image_1}
                    rating={3}
                    />
                    <Product
                    id={4}
                    title='Elevate your active lifestyle with our high-performance athletic shorts, designed for breathability and flexibility during workouts and daily activities.' 
                    price={98.99}
                    image={Image_3}
                    rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                    id={6}
                    title='Stay cozy in style with our soft pastel-colored hoodie, the ideal addition to your wardrobe for comfort and fashion-forward flair.' 
                    price={29.99}
                    image={Image_6}
                    rating={5}
                    />
                </div>
                
            </div>
            
            </div>
            <Footer />
            
        </div>
    )
}

export default Home
