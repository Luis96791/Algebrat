import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SquareRootCalculator from './squareRootCalculator.js';
 
require('../styles/SqrtFunction.css');

class SQRTFunction extends Component {
    constructor(props) {
        super(props);
        this.handleSQRTClick = this.handleSQRTClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleSQRTClick() {
        if (this.state.isAction) {
            this.setState({isAction:false});
        } else {
            this.setState({isAction:true});
        }
    }

    render() {
        const isAction = this.state.isAction;

        return (
            <div>
                <label>
                    <SQRT isAction={isAction} />
                </label>
                <SQRTButton onClick={this.handleSQRTClick} />
            </div>
        );
    }
}

function SQRT(params) {
    if(params.isAction) {
        return (
            <div>
                < SquareRootCalculator />
            </div>
        );
    }
    return null;
}

function SQRTButton(params) {
    return (
        <button onClick={params.onClick} className="sqrt-button">
            Raiz Cuadrada
        </button>
    );
}

ReactDOM.render (
    <SQRTFunction />,
    document.getElementById('root')
);
 
export default SQRTFunction;
