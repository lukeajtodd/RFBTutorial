import React from 'react';
import { formatPrice } from '../helpers';

const Fish = ({ details, addToOrder, index }) => {
    const isAvailable = details.status === "available";
    const buttonText = isAvailable ? "Add To Order" : "Sold Out";
    return (
        <li className="menu-fish">
            <h3 className="fish-name">
                {details.name}
                <span className="price">{formatPrice(details.price)}</span>
            </h3>
            <p>{details.desc}</p>
            <button onClick={() => { addToOrder(index) }} disabled={!isAvailable}>{buttonText}</button>
        </li>
    )
};

export default Fish;

// export default class Fish extends React.Component {
//     render() {
//         const { details } = this.props;
//         const isAvailable = details.status === "available";
//         const buttonText = isAvailable ? "Add To Order" : "Sold Out";
//         return (
//             <li className="menu-fish">
//                 <h3 className="fish-name">
//                     {details.name}
//                     <span className="price">{formatPrice(details.price)}</span>
//                 </h3>
//                 <p>{details.desc}</p>
//                 <button>{buttonText}</button>
//             </li>
//         )
//     }
// }