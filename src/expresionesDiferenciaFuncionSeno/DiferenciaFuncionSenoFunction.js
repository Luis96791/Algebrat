import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DiferenciaFuncionSenoCalculator from './DiferenciaFuncionSenoCalculator.js';

require('../styles/DiferenciaFuncionSenoFunction.css');

class DiferenciaFuncionSenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleDiferenciaFuncionSenoClick = this.handleDiferenciaFuncionSenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleDiferenciaFuncionSenoClick() {
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
                    <DiferenciaFuncionSeno isAction={isAction} />
                </label>
                <DiferenciaFuncionSenoButton onClick={this.handleDiferenciaFuncionSenoClick} />
            </div>
        );
    }
}

function DiferenciaFuncionSeno(params) {
    if(params.isAction) {
        return (
            <div>
                < DiferenciaFuncionSenoCalculator />
            </div>
        );
    }
    return null;
}

function DiferenciaFuncionSenoButton(params) {
    return (
        <button onClick={params.onClick} className="diferencia-funcion-seno-button">
            Resta Funcion Seno
        </button>
    );
}

ReactDOM.render (
    <DiferenciaFuncionSenoFunction />,
    document.getElementById('root')
);

export default DiferenciaFuncionSenoFunction;