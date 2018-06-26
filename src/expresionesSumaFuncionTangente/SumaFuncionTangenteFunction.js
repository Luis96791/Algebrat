import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SumaFuncionTangenteCalculator from './SumaFuncionTangenteCalculator.js';

require('../styles/SumaFuncionTangenteFunction.css');

class SumaFuncionTangenteFunction extends Component {
    constructor(props) {
        super(props);
        this.handleSumaFuncionTangenteClick = this.handleSumaFuncionTangenteClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleSumaFuncionTangenteClick() {
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
                    <SumaFuncionTangente isAction={isAction} />
                </label>
                <SumaFuncionTangenteButton onClick={this.handleSumaFuncionTangenteClick} />
            </div>
        );
    }
}

function SumaFuncionTangente(params) {
    if(params.isAction) {
        return (
            <div>
                < SumaFuncionTangenteCalculator />
            </div>
        );
    }
    return null;
}

function SumaFuncionTangenteButton(params) {
    return (
        <button onClick={params.onClick} className="suma-funcion-tangente-button">
            Suma Funcion Tangente
        </button>
    );
}

ReactDOM.render (
    <SumaFuncionTangenteFunction />,
    document.getElementById('root')
);

export default SumaFuncionTangenteFunction;