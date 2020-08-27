import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total,c) => total + Number(c.price),0);
    return (
        <div>
            <h4 className="bg-info">Shopping Cart</h4>
            <p>Total course added: {cart.length}</p>
            <hr />
            <p className="text-danger">Grand Total : {total}</p>
        </div>
    );
};

export default Cart;