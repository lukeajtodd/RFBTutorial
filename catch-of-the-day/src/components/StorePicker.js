import React, { Component } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {
    goToStore(e) {
        e.preventDefault();
        console.log("You have done it");
    }
    render() {
        return (
            <form onSubmit={this.goToStore(e)} className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}