import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PotencyFunction from './PotencyFunction.js';
import FactorialFunction from './FactorialFunction.js';

require('./styles/ListButtons.css');


class ListButtons extends Component {
    render() {
        return (
            <li>
                <PotencyFunction />
                <FactorialFunction />
            </li>
        );
    }
}

export default ListButtons;