import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_funciontangente from '../assets/img_funciontangente.gif';

require('../styles/w3.css');
require('../styles/FuncionTangenteCalculator.css');

function CalculateFuncionTangente(_cateto_opuesto, _cateto_adyacente) {
    const cateto_opuesto = parseFloat(_cateto_opuesto);
    const cateto_adyacente = parseFloat(_cateto_adyacente);

    if (Number.isNaN(cateto_opuesto) || Number.isNaN(cateto_adyacente)) {
        return '--';    
    }

    var result = 0;

    result = cateto_opuesto / cateto_adyacente;

    return (Math.tan(result)).toPrecision(3) + ' rad';
}

function SolutionFuncionTangente(_cateto_opuesto, _cateto_adyacente) {
    const cateto_opuesto = parseFloat(_cateto_opuesto);
    const cateto_adyacente = parseFloat(_cateto_adyacente);

    if (Number.isNaN(cateto_opuesto) || Number.isNaN(cateto_adyacente)) {
        return '--';    
    }

    var result = 'tan(x) = opuesto / adyacente\n'+
        'tan(x) = '+cateto_opuesto+' / '+cateto_adyacente+'\n'+
        'tan(x) = '+(cateto_opuesto / cateto_adyacente).toPrecision(3);


    return result;
}

class FuncionTangenteCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleCatetoOpuestoChange = this.handleCatetoOpuestoChange.bind(this);
        this.handleCatetoAdyacenteChange = this.handleCatetoAdyacenteChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            cateto_opuesto: '',
            cateto_adyacente: '',
        };
    }

    handleCatetoOpuestoChange(event) {
        this.setState({cateto_opuesto: event.target.value});
    }

    handleCatetoAdyacenteChange(event) {
        this.setState({cateto_adyacente: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const cateto_opuesto = this.state.cateto_opuesto;
        const cateto_adyacente = this.state.cateto_adyacente;
        const solution = SolutionFuncionTangente(cateto_opuesto, cateto_adyacente);
        const result = CalculateFuncionTangente(cateto_opuesto, cateto_adyacente);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-brown w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-brown">
                    <h1 className="w3-center">Función Tangente</h1>
                </div>
                <p>
                    <input className="w3-input" value={cateto_opuesto} onChange={this.handleCatetoOpuestoChange} />
                    <label>Cateto Opuesto</label>
                </p>
                <p>
                    <input className="w3-input" value={cateto_adyacente} onChange={this.handleCatetoAdyacenteChange} />
                    <label>Cateto Adyacente</label>
                </p>
                <p>
                    <img src={img_funciontangente} alt="Función de Tangente" /> 
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
    <FuncionTangenteCalculator />,
    document.getElementById('root')
);

export default FuncionTangenteCalculator;