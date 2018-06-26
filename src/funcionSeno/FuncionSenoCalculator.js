import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_funcionseno from '../assets/img_funcionseno.gif';

require('../styles/w3.css');
require('../styles/FuncionSenoCalculator.css');

function CalculateFuncionSeno(_cateto_opuesto, _hipotenusa) {
    const cateto_opuesto = parseFloat(_cateto_opuesto);
    const hipotenusa = parseFloat(_hipotenusa);

    if (Number.isNaN(cateto_opuesto) || Number.isNaN(hipotenusa)) {
        return '--';    
    }

    var result = 0;

    result = cateto_opuesto / hipotenusa;

    return (Math.sin(result)).toPrecision(3) + ' rad';
}

function SolutionFuncionSeno(_cateto_opuesto, _hipotenusa) {
    const cateto_opuesto = parseFloat(_cateto_opuesto);
    const hipotenusa = parseFloat(_hipotenusa);

    if (Number.isNaN(cateto_opuesto) || Number.isNaN(hipotenusa)) {
        return '--';    
    }

    var result = 'sen(x) = cateto opuesto / hipotenusa\n'+
        'sen(x) = '+cateto_opuesto+' / '+hipotenusa+'\n'+
        'sen(x) = '+(cateto_opuesto / hipotenusa).toPrecision(3);


    return result;
}

class FuncionSenoCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleCatetoOpuestoChange = this.handleCatetoOpuestoChange.bind(this);
        this.handleHipotenusaChange = this.handleHipotenusaChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        
        this.state = {
            cateto_opuesto: '',
            hipotenusa: '',
        };
    }

    handleCatetoOpuestoChange(event) {
        this.setState({cateto_opuesto: event.target.value});
    }

    handleHipotenusaChange(event) {
        this.setState({hipotenusa: event.target.value});
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const cateto_opuesto = this.state.cateto_opuesto;
        const hipotenusa = this.state.hipotenusa;
        const solution = SolutionFuncionSeno(cateto_opuesto, hipotenusa);
        const result = CalculateFuncionSeno(cateto_opuesto, hipotenusa);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-brown w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-brown">
                    <h1 className="w3-center">Función Seno</h1>
                </div>
                <p>
                    <input className="w3-input" value={cateto_opuesto} onChange={this.handleCatetoOpuestoChange} />
                    <label>Cateto Opuesto</label>
                </p>
                <p>
                    <input className="w3-input" value={hipotenusa} onChange={this.handleHipotenusaChange} />
                    <label>Hipotenusa</label>
                </p>
                <p>
                    <img src={img_funcionseno} alt="Función de Seno" /> 
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
    <FuncionSenoCalculator />,
    document.getElementById('root')
);

export default FuncionSenoCalculator; 