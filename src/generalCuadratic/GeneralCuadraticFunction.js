import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GeneralCuadraticCalculator from './GeneralCuadraticCalculator.js';

require('../styles/GeneralCuadraticFunction.css');

class GeneralCuadraticFunction extends Component {
    constructor(props) {
        super(props);
        this.handleGeneralCuadraticClick = this.handleGeneralCuadraticClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleGeneralCuadraticClick() {
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
                    <GeneralCuadratic isAction={isAction} />
                </label>
                <GeneralCuadraticButton onClick={this.handleGeneralCuadraticClick} />
            </div>
        );
    }
}

function GeneralCuadratic(params) {
    if(params.isAction) {
        return (
            <div>
                < GeneralCuadraticCalculator />
            </div>
        );
    }
    return null;
}

function GeneralCuadraticButton(params) {
    return (
        <button onClick={params.onClick} className="general-cuadratic-button">
            General Cuadrática
        </button>
    );
}

ReactDOM.render (
    <GeneralCuadraticFunction />,
    document.getElementById('root')
);

export default GeneralCuadraticFunction;