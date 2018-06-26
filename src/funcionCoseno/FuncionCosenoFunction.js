import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FuncionCosenoCalculator from './FuncionCosenoCalculator.js';

require('../styles/FuncionCosenoFunction.css');

class FuncionCosenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleFuncionCosenoClick = this.handleFuncionCosenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleFuncionCosenoClick() {
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
                    <FuncionCoseno isAction={isAction} />
                </label>
                <FuncionCosenoButton onClick={this.handleFuncionCosenoClick} />
            </div>
        );
    }
}

function FuncionCoseno(params) {
    if(params.isAction) {
        return (
            <div>
                < FuncionCosenoCalculator />
            </div>
        );
    }
    return null;
}

function FuncionCosenoButton(params) {
    return (
        <button onClick={params.onClick} className="funcion-coseno-button">
            Función Coseno
        </button>
    );
}

ReactDOM.render (
    <FuncionCosenoFunction />,
    document.getElementById('root')
);

export default FuncionCosenoFunction;