import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_sumafunciontangente from '../assets/img_sumafunciontangente.png';

require('../styles/w3.css');
require('../styles/SumaFuncionTangenteCalculator.css');

function CalculateSumaFuncionTangente(_angulo1, _angulo2) {
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);

    if (Number.isNaN(angulo1) || Number.isNaN(angulo2)) {
        return '--';    
    }

    var calc_a,calc_b;

    calc_a = Math.tan(angulo1) + Math.tan(angulo2);
    calc_b = 1 - Math.tan(angulo1) * Math.tan(angulo2);

    var result = 0;

    result = calc_a / calc_b;

    return parseFloat(result).toPrecision(3);
}

function SolutionSumaFuncionTangente(_angulo1, _angulo2) {
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);

    if (Number.isNaN(angulo1) || Number.isNaN(angulo2)) {
        return '--';    
    }

    var result = 'tan(a+b) = tan(a) + tan(b) / 1 - tan(a) * tan(b)\n'+
        'tan(a+b) = tan('+angulo1+') + tan('+angulo2+') / 1 - tan('+angulo1+') * tan('+angulo2+')\n'+
        'tan(a+b) = '+Math.tan(angulo1).toPrecision(3)+' + '+Math.tan(angulo2).toPrecision(3)+' / 1 - '+Math.tan(angulo1).toPrecision(3)+' * '+Math.tan(angulo2).toPrecision(3)+'\n'+
        'tan(a+b) = '+ CalculateSumaFuncionTangente(angulo1, angulo2);


    return result;
}

class SumaFuncionTangenteCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleAngulo1Change = this.handleAngulo1Change.bind(this);
        this.handleAngulo2Change = this.handleAngulo2Change.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            angulo1: '',
            angulo2: '',
        };
    }

    handleAngulo1Change(event) {
        this.setState({angulo1: event.target.value});
    }

    handleAngulo2Change(event) {
        this.setState({angulo2: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const angulo1 = this.state.angulo1;
        const angulo2 = this.state.angulo2;
        const solution = SolutionSumaFuncionTangente(angulo1, angulo2);
        const result = CalculateSumaFuncionTangente(angulo1, angulo2);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-teal">
                    <h1 className="w3-center">Suma De Ángulos Para La Función Tangente</h1>
                </div>
                <p>
                    <input className="w3-input" value={angulo1} onChange={this.handleAngulo1Change} />
                    <label>Ángulo [a]</label>
                </p>
                <p>
                    <input className="w3-input" value={angulo2} onChange={this.handleAngulo2Change} />
                    <label>Ángulo [b]</label>
                </p>
                <p>
                    <img src={img_sumafunciontangente} alt="formula suma funcion tangente" /> 
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result} onChange={this.handleResultChange} disabled />
                    <label>Solución</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <SumaFuncionTangenteCalculator />,
    document.getElementById('root')
);

export default SumaFuncionTangenteCalculator;