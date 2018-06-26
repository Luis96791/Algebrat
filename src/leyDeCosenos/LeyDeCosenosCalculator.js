import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_leydecosenos from '../assets/formula_leydecosenos.png';

require('../styles/w3.css');
require('../styles/LeyDeCosenosCalculator.css');

function CalculateLeyDeCosenos(_numero1,_numero2, _numero3, _angulo1, _angulo2, _angulo3) {
    const numero1 = parseFloat(_numero1);
    const numero2 = parseFloat(_numero2);
    const numero3 = parseFloat(_numero3);
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);
    const angulo3 = parseFloat(_angulo3);

    var result = 0;
    var calc_a, calc_b, calc_c;

    if(Number.isNaN(numero1)){
        calc_a = (numero2*numero2);
        calc_b = (numero3*numero3);
        calc_c = (2*numero2*numero3*Math.cos(angulo1))
    } else if(Number.isNaN(numero2)){
        calc_a = (numero1*numero1);
        calc_b = (numero3*numero3);
        calc_c = (2*numero1*numero3*Math.cos(angulo2))
    } else if(Number.isNaN(numero3)){
        calc_a = (numero1*numero1);
        calc_b = (numero2*numero2);
        calc_c = (2*numero1*numero2*Math.cos(angulo3));
    }    

    result = calc_a + calc_b - calc_c;

    return parseFloat(result).toPrecision(3);
}

function SolutionLeyDeCosenos(_numero1,_numero2, _numero3, _angulo1,_angulo2,_angulo3) {
    const numero1 = parseFloat(_numero1);
    const numero2 = parseFloat(_numero2);
    const numero3 = parseFloat(_numero3);
    const angulo1 = parseFloat(_angulo1);
    const angulo2 = parseFloat(_angulo2);
    const angulo3 = parseFloat(_angulo3);

    var calc_a, calc_b, calc_c;
    var variable1, variable2, variable3, angulo;

    if(Number.isNaN(numero1)){
        variable1 = 'a';
        variable2 = 'b';
        variable3 = 'c';
        angulo = 'A';
        calc_a = (numero2*numero2);
        calc_b = (numero3*numero3);
        calc_c = (2*numero2*numero3*Math.cos(angulo1))
    } else if(Number.isNaN(numero2)){
        variable1 = 'b';
        variable2 = 'a';
        variable3 = 'c';
        angulo = 'B';
        calc_a = (numero1*numero1);
        calc_b = (numero3*numero3);
        calc_c = (2*numero1*numero3*Math.cos(angulo2))
    } else if(Number.isNaN(numero3)){
        variable1 = 'c';
        variable2 = 'a';
        variable3 = 'b';
        angulo = 'C';
        calc_a = (numero1*numero1);
        calc_b = (numero2*numero2);
        calc_c = (2*numero1*numero2*Math.cos(angulo3));
    }    

    var result = calc_a + calc_b - calc_c;

    result = variable1+ '² = ' +variable2+ '² + ' +variable3+ '² - 2'+variable2+variable3+ ' cos('+angulo+')\n'+
                +variable1+ '² = ' +calc_a+ ' + ' +calc_b+ ' - ' +calc_c+ '\n'+
                +variable1+ '² = ' +result.toPrecision(3);


    return result;
}

class LeyDeCosenosCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleNumero1Change = this.handleNumero1Change.bind(this);
        this.handleNumero2Change = this.handleNumero2Change.bind(this);
        this.handleNumero3Change = this.handleNumero3Change.bind(this);
        this.handleAngulo1Change = this.handleAngulo1Change.bind(this);
        this.handleAngulo2Change = this.handleAngulo2Change.bind(this);
        this.handleAngulo3Change = this.handleAngulo3Change.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            numero1: '',
            numero2: '',
            numero3: '',
            angulo1: '',
            angulo2: '',
            angulo3: '',
        };
    }

    handleNumero1Change(event) {
        this.setState({numero1: event.target.value});
    }

    handleNumero2Change(event) {
        this.setState({numero2: event.target.value});
    }

    handleNumero3Change(event) {
        this.setState({numero3: event.target.value});
    }


    handleAngulo1Change(event) {
        this.setState({angulo1: event.target.value});
    }


    handleAngulo2Change(event) {
        this.setState({angulo2: event.target.value});
    }

    handleAngulo3Change(event) {
        this.setState({angulo3: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const numero1 = this.state.numero1;
        const numero2 = this.state.numero2;
        const numero3 = this.state.numero3;
        const angulo1 = this.state.angulo1;
        const angulo2 = this.state.angulo2;
        const angulo3 = this.state.angulo3;
        const solution = SolutionLeyDeCosenos(numero1, numero2, numero3, angulo1, angulo2, angulo3);
        const result = CalculateLeyDeCosenos(numero1, numero2, numero3, angulo1, angulo2, angulo3);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-green w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-green">
                    <h1 className="w3-center">Ley De Cosenos</h1>
                </div>
                <p>
                    <input className="w3-input" value={numero1} onChange={this.handleNumero1Change} />
                    <label>[a]</label>
                </p>
                <p>
                    <input className="w3-input" value={numero2} onChange={this.handleNumero2Change} />
                    <label>[b]</label>
                </p>
                <p>
                    <input className="w3-input" value={numero3} onChange={this.handleNumero3Change} />
                    <label>[c]</label>
                </p>
                <p>
                    <input className="w3-input" value={angulo1} onChange={this.handleAngulo1Change} />
                    <label>[A]</label>
                </p>
                <p>
                    <input className="w3-input" value={angulo2} onChange={this.handleAngulo2Change} />
                    <label>[B]</label>
                </p>
                <p>
                    <input className="w3-input" value={angulo3} onChange={this.handleAngulo3Change} />
                    <label>[C]</label>
                </p>
                <p>
                    <img src={img_leydecosenos} alt="Ley de Cosenos" /> 
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
    <LeyDeCosenosCalculator />,
    document.getElementById('root')
);

export default LeyDeCosenosCalculator;