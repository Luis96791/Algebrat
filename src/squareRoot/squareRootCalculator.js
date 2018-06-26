import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import img_raizcuadrada from '../assets/sqrt.jpg';

require('../styles/w3.css');
require('../styles/SqrtCalculator.css');

function CalculateSquareRoot(_numero) {
	const numero = parseFloat(_numero);
	if(Number.isNaN(numero)){
    	return '--';
    }
	return Math.sqrt(numero).toPrecision(3);
}
 
function SolutionSquareRoot(_numero) {
    const numero = parseFloat(_numero);
    const resultado = CalculateSquareRoot(_numero);
    if(Number.isNaN(numero)){
    	return '';
    }
 	var result = 'x = √n\n'+
        'x = √'+numero+'\n'+
        'x = '+resultado+'\n';

 	return result;
 }


 class SquareRootCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleNumeroChange = this.handleNumeroChange.bind(this);
        this.handleResultadoChange = this.handleResultadoChange.bind(this);
        
        this.state = {
            numero: ''
        };
    }

    handleNumeroChange(event) {
        this.setState({numero: event.target.value});
    }


    handleResultadoChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const numero = this.state.numero;
        const solution = SolutionSquareRoot(numero);
        const resultado = CalculateSquareRoot(numero);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-yellow w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-yellow">
                    <h1 className="w3-center">Calcular Raíz Cuadrada</h1>
                </div>
                <p>
                    <input className="w3-input" value={numero} onChange={this.handleNumeroChange} />
                    <label>Número</label>
                </p>
                <p>
                    <img src={img_raizcuadrada} alt="formula cuadratica" /> 
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={resultado} onChange={this.handleResultadoChange} disabled />
                    <label>Solución</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <SquareRootCalculator />,
    document.getElementById('root')
);

export default SquareRootCalculator;