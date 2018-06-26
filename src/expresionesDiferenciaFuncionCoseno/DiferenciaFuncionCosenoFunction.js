import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DiferenciaFuncionCosenoCalculator from './DiferenciaFuncionCosenoCalculator.js';

require('../styles/DiferenciaFuncionCosenoFunction.css');

class DiferenciaFuncionCosenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleDiferenciaFuncionCosenoClick = this.handleDiferenciaFuncionCosenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleDiferenciaFuncionCosenoClick() {
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
                    <DiferenciaFuncionCoseno isAction={isAction} />
                </label>
                <DiferenciaFuncionCosenoButton onClick={this.handleDiferenciaFuncionCosenoClick} />
            </div>
        );
    }
}

function DiferenciaFuncionCoseno(params) {
    if(params.isAction) {
        return (
            <div>
                < DiferenciaFuncionCosenoCalculator />
            </div>
        );
    }
    return null;
}

function DiferenciaFuncionCosenoButton(params) {
    return (
        <button onClick={params.onClick} className="diferencia-funcion-coseno-button">
            Resta Funcion Coseno
        </button>
    );
}

ReactDOM.render (
    <DiferenciaFuncionCosenoFunction />,
    document.getElementById('root')
);

export default DiferenciaFuncionCosenoFunction;