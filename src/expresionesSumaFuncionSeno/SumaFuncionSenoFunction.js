import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SumaFuncionSenoCalculator from './SumaFuncionSenoCalculator.js';

require('../styles/SumaFuncionSenoFunction.css');

class SumaFuncionSenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleSumaFuncionSenoClick = this.handleSumaFuncionSenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleSumaFuncionSenoClick() {
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
                    <SumaFuncionSeno isAction={isAction} />
                </label>
                <SumaFuncionSenoButton onClick={this.handleSumaFuncionSenoClick} />
            </div>
        );
    }
}

function SumaFuncionSeno(params) {
    if(params.isAction) {
        return (
            <div>
                < SumaFuncionSenoCalculator />
            </div>
        );
    }
    return null;
}

function SumaFuncionSenoButton(params) {
    return (
        <button onClick={params.onClick} className="suma-funcion-seno-button">
            Suma Funcion Seno
        </button>
    );
}

ReactDOM.render (
    <SumaFuncionSenoFunction />,
    document.getElementById('root')
);

export default SumaFuncionSenoFunction;