import React, {Component} from 'react';
import PotencyFunction from './potency/PotencyFunction.js';
import FactorialFunction from './factorial/FactorialFunction.js';
import TCPFunction from './tcp/TCPFunction.js';
import GeneralCuadraticFunction from './generalCuadratic/GeneralCuadraticFunction.js';
import HeronFunction from './heron/HeronFunction.js';
import DifferenceSquareFunction from './differenceOfSquares/DifferenceSquaresFunction.js';
import DiscriminantFactorFunction from './discriminant/DiscriminantFactorFunction.js';
import ParabolaVertexFunction from './parabolaVertex/ParabolaVertexFunction.js';
import EulerPoliedrosFunction from './eulerPoliedros/EulerPoliedrosFunction.js';

require('./styles/ListButtons.css');


class ListButtons extends Component {
    render() {
        return (
            <li>
                < PotencyFunction />
                < FactorialFunction />
                < TCPFunction />
                < GeneralCuadraticFunction />
                < HeronFunction />
                < DifferenceSquareFunction />
                < DiscriminantFactorFunction />
                < ParabolaVertexFunction />
                < EulerPoliedrosFunction />
            </li>
        );
    }
}

export default ListButtons;