import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_difCuadrados from '../assets/diferencia_cuadrados.png';

require('../styles/w3.css');

function SolutionDifferenceOfSquares(_value_x, _value_y) {
    var value_x = parseFloat(_value_x);
    var value_y = parseFloat(_value_y);
    var factor_x = 0;
    var factor_y = 0;
    var sqrt_x = Math.sqrt(value_x);
    var sqrt_y = Math.sqrt(value_y);

    if(Number.isNaN(value_x) || Number.isNaN(value_y)){
        return '--';
    }
    if((typeof sqrt_x === 'number' && sqrt_x % 1 === 0)) {
        factor_x = sqrt_x;
    }
    if((typeof sqrt_y === 'number' && sqrt_y % 1 === 0)) {
        factor_y = sqrt_y;
    }


    var result = '-- Solución para (x) --\n'+
                '(x² - y²) = (x + '+factor_y+')(x - '+factor_y+')\n'+
                '-- Solución para (y) --\n'+
                '(x² - y²) = ('+factor_x+' + y)('+factor_x+' - y)';

    return result;
}

function CalculateDifferenceOfSquares(_value_x, _value_y) {
    var value_x = parseFloat(_value_x);
    var value_y = parseFloat(_value_y);
    var factor_x = 0;
    var factor_y = 0;
    var sqrt_x = Math.sqrt(value_x);
    var sqrt_y = Math.sqrt(value_y);

    if((typeof sqrt_x === 'number' && sqrt_x % 1 === 0) &&
        (typeof sqrt_y === 'number' && sqrt_y % 1 === 0)) {
            factor_x = sqrt_x;
            factor_y = sqrt_y;
    } else {
        return '--';
    }

    return '('+factor_x+' + '+factor_y+')('+factor_x+' - '+factor_y+')';
    
}

class DifferenceSquaresCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleValueXChange = this.handleValueXChange.bind(this);
        this.handleValueYChange = this.handleValueYChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

        this.state = {
            value_x: '',
            value_y: ''
        }
    }

    handleValueXChange(event) {
        this.setState({value_x: event.target.value});
    }

    handleValueYChange(event) {
        this.setState({value_y: event.target.value});
    }

    handleSolutionChange(event) {
        this.props.onSolutionChange(event.target.value);
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const value_x = this.state.value_x;
        const value_y = this.state.value_y;
        const solution = SolutionDifferenceOfSquares(value_x, value_y);
        const result = CalculateDifferenceOfSquares(value_x, value_y);
        

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-purple w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-purple"> 
                    <h1 className="w3-center">Calcular Diferencia de Cuadrados</h1>
                </div>
                <p>
                    <input className="w3-input" value={value_x} onChange={this.handleValueXChange} />
                    <label>Valor de X</label>
                </p>
                <p>
                    <input className="w3-input" value={value_y} onChange={this.handleValueYChange} />
                    <label>Valor de Y</label>
                </p>
                <p>
                    <img src={img_difCuadrados} className="w3-round" alt="formula diferencia cuadrados" />
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea className="w3-input" value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result} onChange={this.handleResultChange} disabled />
                    <label>Resultado</label> 
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <DifferenceSquaresCalculator />,
    document.getElementById('root')
);

export default DifferenceSquaresCalculator;