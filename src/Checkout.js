import React, { useReducer } from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/Bank-Stripe/FST/FST_1500x100_English.jpg" alt="" />

                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>                    
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                         />
                         
                    ))}
                    
                    {/* <CheckoutProduct /> */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
