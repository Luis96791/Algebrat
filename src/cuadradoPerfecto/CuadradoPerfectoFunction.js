import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CuadradoPerfectoCalculator from './CuadradoPerfectoCalculator.js';

require('../styles/CuadradoPerfectoFunction.css');

class CuadradoPerfectoFunction extends Component {
    constructor(props) {
        super(props);
        this.handleCuadradoPerfectoClick = this.handleCuadradoPerfectoClick.bind(this);
        this.state = {
            isAction: false
        } 
    };

    handleCuadradoPerfectoClick() {
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
                    <CuadradoPerfecto isAction={isAction} />
                </label>
                <CuadradoPerfectoButton onClick={this.handleCuadradoPerfectoClick} />
            </div>
        );
    }
}

function CuadradoPerfecto(params) {
    if(params.isAction) {
        return (
            <div>
                <CuadradoPerfectoCalculator />
            </div>
        );
    }
    return null;
}

function CuadradoPerfectoButton(params) {
    return (
        <button onClick={params.onClick} className="Cuadrado-Perfecto-button">
            Cuadrado Perfecto
        </button>
    );
}

ReactDOM.render (
    <CuadradoPerfectoFunction />,
    document.getElementById('root')
);

export default CuadradoPerfectoFunction;
