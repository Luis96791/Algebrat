import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DifferenceSquaresCalculator from './DifferenceOfSquaresCalculator.js';

require('../styles/DifferenceOfSquaresFunction.css');

class DifferenceSquaresFunction extends Component {
    constructor(props) {
        super(props);
        this.handleDifferenceSquaresClick = this.handleDifferenceSquaresClick.bind(this);

        this.state = {
            isAction: false
        };
    }

    handleDifferenceSquaresClick() {
        if(this.state.isAction) {
            this.setState({isAction: false});
        } else {
            this.setState({isAction: true});
        }
    }

    render() {
        const isAction = this.state.isAction;

        return (
            <div>
                <label>
                    <DifferenceSquares isAction={isAction}/>
                </label>
                <DifferenceSquaresButton 
                    onClick={this.handleDifferenceSquaresClick}
                />
            </div>
        );
    }
}

function DifferenceSquares(props) {
    const isAction = props.isAction;
    if(isAction) {
        return (
            <div>
                <DifferenceSquaresCalculator />
            </div>
        );
    }
    return null;
}

function DifferenceSquaresButton(props) {
    return (
        <button onClick={props.onClick} className="differenceSquares-button">
            Diferencia de Cuadrados
        </button>
    );
}

ReactDOM.render (
    <DifferenceSquaresFunction />,
    document.getElementById('root')
);

export default DifferenceSquaresFunction;