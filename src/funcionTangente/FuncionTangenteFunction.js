import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FuncionTangenteCalculator from './FuncionTangenteCalculator.js';

require('../styles/FuncionTangenteFunction.css');

class FuncionTangenteFunction extends Component {
    constructor(props) {
        super(props);
        this.handleFuncionTangenteClick = this.handleFuncionTangenteClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleFuncionTangenteClick() {
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
                    <FuncionTangente isAction={isAction} />
                </label>
                <FuncionTangenteButton onClick={this.handleFuncionTangenteClick} />
            </div>
        );
    }
}

function FuncionTangente(params) {
    if(params.isAction) {
        return (
            <div>
                < FuncionTangenteCalculator />
            </div>
        );
    }
    return null;
}

function FuncionTangenteButton(params) {
    return (
        <button onClick={params.onClick} className="funcion-tangente-button">
            Función Tangente
        </button>
    );
}

ReactDOM.render (
    <FuncionTangenteFunction />,
    document.getElementById('root')
);

export default FuncionTangenteFunction;