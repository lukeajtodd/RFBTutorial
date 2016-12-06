import React, { Component } from 'react';
import { formatPrice } from '../helpers';

const Order = ({ fishes, order }) => {
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
        const fish = fishes[key];
        const count = order[key];
        const isAvailable = fish && fish.status == "available";
        if (isAvailable) {
            return prevTotal + ( count * fish.price || 0 );
        }
        return prevTotal;
    }, 0);

    const 

    return (
        <div className="order-wrap">
            <h2>Your Order</h2>
            <ul className="order">
                <li className="total">
                    <strong>Total: {formatPrice(total)}</strong>
                </li>
            </ul>
        </div>
    )
};

export default Order;