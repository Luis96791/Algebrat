import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_discriminante from '../assets/factor_discriminante.png';

require('../styles/w3.css');

function SolutionDiscriminantFactor(_cuadratic_factor, _lineal_factor, _constant_factor) {
    const cuadratic_factor = parseFloat(_cuadratic_factor);
    const lineal_factor = parseFloat(_lineal_factor);
    const constant_factor = parseFloat(_constant_factor);
    
    if(isNaN(cuadratic_factor) || isNaN(lineal_factor) || isNaN(constant_factor)) {
        return '--';
    }
    
    var result = '(b² - 4ac) = '+lineal_factor+'² - 4('+cuadratic_factor+')('+constant_factor+')\n'+
    '(b² - 4ac) = '+Math.pow(lineal_factor, 2)+' - 4('+cuadratic_factor+')('+constant_factor+')\n'+
    '(b² - 4ac) = '+Math.pow(lineal_factor, 2)+' - '+(4*cuadratic_factor*constant_factor);
    
    return result;
}

function CalculateDiscriminantFactor(_cuadratic_factor, _lineal_factor, _constant_factor) {
    const cuadratic_factor = parseFloat(_cuadratic_factor);
    const lineal_factor = parseFloat(_lineal_factor);
    const constant_factor = parseFloat(_constant_factor);
    
    if(isNaN(cuadratic_factor) || isNaN(lineal_factor) || isNaN(constant_factor)) {
        return '--';
    }

    return (Math.pow(lineal_factor, 2) - (4*cuadratic_factor*constant_factor));
}

function chargeImage(result) {
    if(result > 0)
        return require('../assets/discriminante_positivo.gif');
    else if(result === 0)
        return require('../assets/discriminante_cero.gif');
    else if(result < 0)
        return require('../assets/discriminante_negativo.gif');
    return '--';
}

function GetCommentResult(result) {
    if(result > 0)
        return 'Discriminante Positivo';
    else if(result === 0)
        return 'Discriminante Cero';
    else if(result < 0)
        return 'Discriminante Negativo';
    return '--';
}

class DiscriminantFactorCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleCuadraticFactorChange = this.handleCuadraticFactorChange.bind(this);
        this.handleLinealFactorChange = this.handleLinealFactorChange.bind(this);
        this.handleConstantFactorChange = this.handleConstantFactorChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
                
        this.state = {
            cuadratic_factor: '',
            lineal_factor: '',
            constant_factor: ''
        }
    }

    handleCuadraticFactorChange(event) {
        this.setState({cuadratic_factor: event.target.value});
    }

    handleLinealFactorChange(event) {
        this.setState({lineal_factor: event.target.value});
    }

    handleConstantFactorChange(event) {
        this.setState({constant_factor: event.target.value});
    }

    handleSolutionChange(event) {
        this.props.onSolutionChange(event.target.value);
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    handleCommentChange(event) {
        this.props.onCommentChange(event.target.value);
    }

    render() {
        const cuadratic_factor = this.state.cuadratic_factor;
        const lineal_factor = this.state.lineal_factor;
        const constant_factor = this.state.constant_factor;
        const solution = SolutionDiscriminantFactor(cuadratic_factor, lineal_factor, constant_factor);
        const result = CalculateDiscriminantFactor(cuadratic_factor, lineal_factor, constant_factor);
        
        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-indigo w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-indigo">
                    <h1 className="w3-center">Calcular Factor Discriminante</h1>
                </div>
                <p>
                    <input className="w3-input" value={cuadratic_factor} onChange={this.handleCuadraticFactorChange} />
                    <label>Factor cuadrático [a]</label>
                </p>
                <p>
                    <input className="w3-input" value={lineal_factor} onChange={this.handleLinealFactorChange} />
                    <label>Factor líneal [b]</label>
                </p>
                <p>
                    <input className="w3-input" value={constant_factor} onChange={this.handleConstantFactorChange} />
                    <label>Factor constante [c]</label>
                </p>
                <p>
                    <img src={img_discriminante} alt="factor discriminante" />
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result} onChange={this.handleResultChange} disabled />
                    <label>Resultado</label>
                </p>
                <p>
                    <img src={chargeImage(result)} alt="" />
                    <br />
                    <label>Gráfica</label>
                </p>
                <p>
                    <input className="w3-input" value={GetCommentResult(result)} onChange={this.handleCommentChange} disabled />
                    <label>Comentario</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <DiscriminantFactorCalculator />,
    document.getElementById('root')
);

export default DiscriminantFactorCalculator;