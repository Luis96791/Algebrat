import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FuncionSenoCalculator from './FuncionSenoCalculator.js';

require('../styles/FuncionSenoFunction.css');

class FuncionSenoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleFuncionSenoClick = this.handleFuncionSenoClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleFuncionSenoClick() {
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
                    <FuncionSeno isAction={isAction} />
                </label>
                <FuncionSenoButton onClick={this.handleFuncionSenoClick} />
            </div>
        );
    }
}

function FuncionSeno(params) {
    if(params.isAction) {
        return (
            <div>
                < FuncionSenoCalculator />
            </div>
        );
    }
    return null;
}

function FuncionSenoButton(params) {
    return (
        <button onClick={params.onClick} className="funcion-seno-button">
            Función Seno
        </button>
    );
}

ReactDOM.render (
    <FuncionSenoFunction />,
    document.getElementById('root')
);

export default FuncionSenoFunction;