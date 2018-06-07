import React, {Component} from 'react';
import PotencyFunction from './PotencyFunction.js';
require('./styles/ListButtons.css');

class ListButtons extends Component {
    render() {
        return (
            <div>
                <label>
                    <PotencyFunction />
                </label>
            </div>
        );
    }
}


export default ListButtons;