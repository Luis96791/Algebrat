import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DiferenciaFuncionTangenteCalculator from './DiferenciaFuncionTangenteCalculator.js';

require('../styles/DiferenciaFuncionTangenteFunction.css');

class DiferenciaFuncionTangenteFunction extends Component {
    constructor(props) {
        super(props);
        this.handleDiferenciaFuncionTangenteClick = this.handleDiferenciaFuncionTangenteClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleDiferenciaFuncionTangenteClick() {
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
                    <DiferenciaFuncionTangente isAction={isAction} />
                </label>
                <DiferenciaFuncionTangenteButton onClick={this.handleDiferenciaFuncionTangenteClick} />
            </div>
        );
    }
}

function DiferenciaFuncionTangente(params) {
    if(params.isAction) {
        return (
            <div>
                < DiferenciaFuncionTangenteCalculator />
            </div>
        );
    }
    return null;
}

function DiferenciaFuncionTangenteButton(params) {
    return (
        <button onClick={params.onClick} className="diferencia-funcion-tangente-button">
            Resta Funcion Tangente
        </button>
    );
}

ReactDOM.render (
    <DiferenciaFuncionTangenteFunction />,
    document.getElementById('root')
);

export default DiferenciaFuncionTangenteFunction;