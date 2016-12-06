import React, { Component } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {
    goToStore = (e) => {
        e.preventDefault();
        let storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }
    render() {
        return (
            <form onSubmit={(e) => { this.goToStore(e) }} className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};