import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_cuadradoperfecto from '../assets/img_cuadradoperfecto.png';

require('../styles/w3.css');
require('../styles/CuadradoPerfectoCalculator.css');

function CalculateCuadradoPerfecto(_numero) {
    const numero = parseFloat(_numero);

    if (Number.isNaN(numero)){
        return '--';     
    }

    var calc_a = Math.sqrt(numero);
    var decimal = calc_a % 1;

    var result;

    if(decimal === 0){
        result = 'Si es cuadrado perfecto';
    }else{
        result = 'No es cuadrado perfecto';
    }

    return result;
}

function SolutionCuadradoPerfecto(_numero) {
    const numero = parseFloat(_numero);

    if (Number.isNaN(numero)){
        return '--';    
    }

    var result = 'raiz = √n\n'+
                 'raiz = √'+numero+'\n'+
                 '        = '+Math.sqrt(numero);

    return result;
}

class CuadradoPerfectoCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleNumeroChange = this.handleNumeroChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            numero: '',
        };
    }

    handleNumeroChange(event) {
        this.setState({numero: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const numero = this.state.numero;
        const solution = SolutionCuadradoPerfecto(numero);
        const result = CalculateCuadradoPerfecto(numero);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-brown w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-brown">
                    <h1 className="w3-center">Cuadrado Perfecto</h1>
                </div>
                <p>
                    <input className="w3-input" value={numero} onChange={this.handleNumeroChange} />
                    <label>Número</label>
                </p>
                <p>
                    <img src={img_cuadradoperfecto} alt="formula cuadrado perfecto" /> 
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
    <CuadradoPerfectoCalculator />,
    document.getElementById('root')
);

export default CuadradoPerfectoCalculator;