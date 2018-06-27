import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import img_cuadratica from '../assets/formula_cuadratica.png';

require('../styles/w3.css');
require('../styles/GeneralCuadraticCalculator.css');

function CalculateGeneralCuadratic(_factor_cuadrado, _factor_lineal, _factor_constante, _signed) {
    const factor_cuadrado = parseFloat(_factor_cuadrado);
    const factor_lineal = parseFloat(_factor_lineal);
    const factor_constante = parseFloat(_factor_constante);

    if (Number.isNaN(factor_cuadrado) || Number.isNaN(factor_lineal) || Number.isNaN(factor_constante)) {
        return '--';    
    }

    var result = 0;

    if (_signed === 'positive') {
        result = (((-1)*factor_lineal)+Math.sqrt(Math.pow(factor_lineal, 2)-(4*(factor_cuadrado*factor_constante))))/(2*factor_cuadrado); 
    } else if (_signed === 'negative') {
        result = (((-1)*factor_lineal)-Math.sqrt(Math.pow(factor_lineal, 2)-(4*(factor_cuadrado*factor_constante))))/(2*factor_cuadrado);
    }

    return parseFloat(result).toPrecision(3);
}

function SolutionGeneralCuadratic(_factor_cuadrado, _factor_lineal, _factor_constante) {
    const factor_cuadrado = parseFloat(_factor_cuadrado);
    const factor_lineal = parseFloat(_factor_lineal);
    const factor_constante = parseFloat(_factor_constante);
    
    if (Number.isNaN(factor_cuadrado) || Number.isNaN(factor_lineal) || Number.isNaN(factor_constante)) {
        return '';    
    }
    var calc_b, calc_b2, calc_4ac, calc_2a, calc_sqrt;

    calc_b = (-1)*factor_lineal;
    calc_b2 = Math.pow(factor_lineal, 2);
    calc_4ac = 4*(factor_cuadrado*factor_constante);
    calc_2a = 2*factor_cuadrado;
    calc_sqrt = Math.sqrt((calc_b2 - calc_4ac));

    var result = 'x = -b ± √(b² - 4ac) / 2a\n'+
        'x = (-('+factor_lineal+') ± √(('+factor_lineal+')² - 4('+factor_cuadrado+')('+factor_constante+')))'+
        ' / 2('+factor_cuadrado+')\n'+
        'x = ('+calc_b+' ± √('+calc_b2+' - '+calc_4ac+')) / '+calc_2a+'\n'+
        'x = ('+calc_b+'± √'+(calc_b2-calc_4ac)+') / '+calc_2a+'\n'+
        'x = ('+calc_b+' ± '+calc_sqrt+') / '+calc_2a+'\n'+
        'x1 = ('+calc_b+' + '+calc_sqrt+') / '+calc_2a+' = '+(calc_b+calc_sqrt)+' / '+calc_2a+'\n'+
        'x2 = ('+calc_b+' - '+calc_sqrt+') / '+calc_2a+' = '+(calc_b-calc_sqrt)+' / '+calc_2a;

    return result;
}

class GeneralCuadraticCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleFactorCuadradoChange = this.handleFactorCuadradoChange.bind(this);
        this.handleFactorLinealChange = this.handleFactorLinealChange.bind(this);
        this.handleFactorConstanteChange = this.handleFactorConstanteChange.bind(this);
        this.handleResultX0Change = this.handleResultX0Change.bind(this);
        this.handleResultX1Change = this.handleResultX1Change.bind(this);
        
        this.state = {
            factor_cuadrado: '',
            factor_lineal: '',
            factor_constante: ''
        };
    }

    handleFactorCuadradoChange(event) {
        this.setState({factor_cuadrado: event.target.value});
    }

    handleFactorLinealChange(event) {
        this.setState({factor_lineal: event.target.value});
    }

    handleFactorConstanteChange(event) {
        this.setState({factor_constante: event.target.value});
    }

    handleResultX0Change(event) {
        this.props.onResultChange(event.target.value);
    }

    handleResultX1Change(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const factor_cuadrado = this.state.factor_cuadrado;
        const factor_lineal = this.state.factor_lineal;
        const factor_constante = this.state.factor_constante;
        const solution = SolutionGeneralCuadratic(factor_cuadrado, factor_lineal, factor_constante);
        const result_x0 = CalculateGeneralCuadratic(factor_cuadrado, factor_lineal, factor_constante, 'positive');
        const result_x1 = CalculateGeneralCuadratic(factor_cuadrado, factor_lineal, factor_constante, 'negative');;

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-brown w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-brown">
                    <h1 className="w3-center">Fórmula General Cuadrática</h1>
                </div>
                <p>
                    <input className="w3-input" value={factor_cuadrado} onChange={this.handleFactorCuadradoChange} />
                    <label>Factor cuadrático [a]</label>
                </p>
                <p>
                    <input className="w3-input" value={factor_lineal} onChange={this.handleFactorLinealChange} />
                    <label>Factor líneal [b]</label>
                </p>
                <p>
                    <input className="w3-input" value={factor_constante} onChange={this.handleFactorConstanteChange} />
                    <label>Factor constante [c]</label>
                </p>
                <p>
                    <img src={img_cuadratica} alt="formula cuadratica" /> 
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result_x0} onChange={this.handleResultX0Change} disabled />
                    <label>Solución 1</label>
                </p>
                <p>
                    <input className="w3-input" value={result_x1} onChange={this.handleResultX1Change} disabled />
                    <label>Solución 2</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <GeneralCuadraticCalculator />,
    document.getElementById('root')
);

export default GeneralCuadraticCalculator;