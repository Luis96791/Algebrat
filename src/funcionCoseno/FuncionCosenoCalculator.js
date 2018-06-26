import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_funcioncoseno from '../assets/img_funcioncoseno.gif';

require('../styles/w3.css');
require('../styles/FuncionCosenoCalculator.css');

function CalculateFuncionCoseno(_cateto_adyacente, _hipotenusa) {
    const cateto_adyacente = parseFloat(_cateto_adyacente);
    const hipotenusa = parseFloat(_hipotenusa);

    if (Number.isNaN(cateto_adyacente) || Number.isNaN(hipotenusa)) {
        return '--';     
    }

    var result = 0;

    result = cateto_adyacente / hipotenusa;

    return (Math.cos(result)).toPrecision(3) + ' rad';
}

function SolutionFuncionCoseno(_cateto_adyacente, _hipotenusa) {
    const cateto_adyacente = parseFloat(_cateto_adyacente);
    const hipotenusa = parseFloat(_hipotenusa);

    if (Number.isNaN(cateto_adyacente) || Number.isNaN(hipotenusa)) {
        return '--';    
    }

    var result = 'cos(x) = cateto adyacente / hipotenusa\n'+
        'cos(x) = '+cateto_adyacente+' / '+hipotenusa+'\n'+
        'cos(x) = '+(cateto_adyacente / hipotenusa).toPrecision(3);


    return result;
}

class FuncionCosenoCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleCatetoAdyacenteChange = this.handleCatetoAdyacenteChange.bind(this);
        this.handleHipotenusaChange = this.handleHipotenusaChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            cateto_adyacente: '',
            hipotenusa: '',
        };
    }

    handleCatetoAdyacenteChange(event) {
        this.setState({cateto_adyacente: event.target.value});
    }

    handleHipotenusaChange(event) {
        this.setState({hipotenusa: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const cateto_adyacente = this.state.cateto_adyacente;
        const hipotenusa = this.state.hipotenusa;
        const solution = SolutionFuncionCoseno(cateto_adyacente, hipotenusa);
        const result = CalculateFuncionCoseno(cateto_adyacente, hipotenusa);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-brown w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-brown">
                    <h1 className="w3-center">Función Coseno</h1>
                </div>
                <p>
                    <input className="w3-input" value={cateto_adyacente} onChange={this.handleCatetoAdyacenteChange} />
                    <label>Cateto Adyacente</label>
                </p>
                <p>
                    <input className="w3-input" value={hipotenusa} onChange={this.handleHipotenusaChange} />
                    <label>Hipotenusa</label>
                </p>
                <p>
                    <img src={img_funcioncoseno} alt="Función de Coseno" /> 
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
    <FuncionCosenoCalculator />,
    document.getElementById('root')
);

export default FuncionCosenoCalculator;