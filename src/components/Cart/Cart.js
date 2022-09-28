import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div className="cart">
            <div className="box">
                <h1>This is Cart</h1>
                <h1>Selected items:{props.cart.length}</h1>
                <p></p>
            </div>
        </div>
    );
};

export default Cart;