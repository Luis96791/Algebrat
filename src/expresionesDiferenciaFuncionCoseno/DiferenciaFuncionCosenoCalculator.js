import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_diferenciafuncioncoseno from '../assets/img_diferenciafuncioncoseno.png';

require('../styles/w3.css');
require('../styles/DiferenciaFuncionCosenoCalculator.css');

function CalculateDiferenciaFuncionCoseno(_angulo1, _angulo2) {
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);

    if (Number.isNaN(angulo1) || Number.isNaN(angulo2)) {
        return '--';    
    }

    var calc_a,calc_b;

    calc_a = Math.cos(angulo1) * Math.cos(angulo2);
    calc_b = Math.sin(angulo1) * Math.sin(angulo2);

    var result = 0;

    result = calc_a + calc_b;

    return parseFloat(result).toPrecision(3);
}

function SolutionDiferenciaFuncionCoseno(_angulo1, _angulo2) {
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);

    if (Number.isNaN(angulo1) || Number.isNaN(angulo2)) {
        return '--';    
    }

    var result = 'cos(a-b) = cos(a) * cos(b) + sin(a) * sin(b)\n'+
        'cos(a-b) = cos('+angulo1+') * cos('+angulo2+') + sin('+angulo1+') * sin('+angulo2+')\n'+
        'cos(a-b) = '+Math.cos(angulo1).toPrecision(3)+' * '+Math.cos(angulo2).toPrecision(3)+' + '+Math.sin(angulo1).toPrecision(3)+' * '+Math.sin(angulo2).toPrecision(3)+'\n'+
        'cos(a-b) = '+ CalculateDiferenciaFuncionCoseno(angulo1, angulo2);


    return result;
}

class DiferenciaFuncionCosenoCalculator extends Component {
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
        const solution = SolutionDiferenciaFuncionCoseno(angulo1, angulo2);
        const result = CalculateDiferenciaFuncionCoseno(angulo1, angulo2);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-indigo w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-indigo">
                    <h1 className="w3-center">Resta De Ángulos Para La Función Coseno</h1>
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
                    <img src={img_diferenciafuncioncoseno} alt="formula diferencia funcion Coseno" /> 
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
    <DiferenciaFuncionCosenoCalculator />,
    document.getElementById('root')
);

export default DiferenciaFuncionCosenoCalculator;