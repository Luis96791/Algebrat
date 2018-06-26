import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SumaFuncionCosenoCalculator from './SumaFuncionCosenoCalculator.js';

require('../styles/SumaFuncionCosenoFunction.css');

class SumaFuncionCosenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleSumaFuncionCosenoClick = this.handleSumaFuncionCosenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleSumaFuncionCosenoClick() {
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
                    <SumaFuncionCoseno isAction={isAction} />
                </label>
                <SumaFuncionCosenoButton onClick={this.handleSumaFuncionCosenoClick} />
            </div>
        );
    }
}

function SumaFuncionCoseno(params) {
    if(params.isAction) {
        return (
            <div>
                < SumaFuncionCosenoCalculator />
            </div>
        );
    }
    return null;
}

function SumaFuncionCosenoButton(params) {
    return (
        <button onClick={params.onClick} className="suma-funcion-coseno-button">
            Suma Funcion Coseno
        </button>
    );
}

ReactDOM.render (
    <SumaFuncionCosenoFunction />,
    document.getElementById('root')
);

export default SumaFuncionCosenoFunction;