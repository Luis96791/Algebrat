import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_formula_vertice from '../assets/formula_vertice_parabola.png';

require('../styles/w3.css');

function SolutionParabolaVertex(_cuadratic_factor, _lineal_factor, _constant_factor) {
    const cuadratic_factor = parseFloat(_cuadratic_factor);
    const lineal_factor = parseFloat(_lineal_factor);
    const constant_factor = parseFloat(_constant_factor);

    if(isNaN(cuadratic_factor) || isNaN(lineal_factor) || isNaN(constant_factor)) {
        return '--';
    }

    var vertex_x = -lineal_factor/(2*cuadratic_factor);
    var vertex_y = (cuadratic_factor*(Math.pow(vertex_x, 2)) + lineal_factor*vertex_x + constant_factor);

    var result = 'x = -('+lineal_factor+') / 2('+cuadratic_factor+')\n'+
                'x = '+vertex_x+'\n'+
                'y = '+cuadratic_factor+'('+vertex_x+')² + '+lineal_factor+'('+vertex_x+') + '+constant_factor+'\n'+
                'y = '+vertex_y;
    
    return result;
}

function CalculateParabolaVertex(_cuadratic_factor, _lineal_factor, _constant_factor) {
    const cuadratic_factor = parseFloat(_cuadratic_factor);
    const lineal_factor = parseFloat(_lineal_factor);
    const constant_factor = parseFloat(_constant_factor);

    if(isNaN(cuadratic_factor) || isNaN(lineal_factor) || isNaN(constant_factor)) {
        return '--';
    }

    var vertex_x = -lineal_factor/(2*cuadratic_factor);
    var vertex_y = (cuadratic_factor*(Math.pow(vertex_x, 2)) + lineal_factor*vertex_x + constant_factor);

    return '(x => '+vertex_x+') (y => '+vertex_y+')';
}

class ParabolaVertexCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleCuadraticFactorChange = this.handleCuadraticFactorChange.bind(this);
        this.handleLinealFactorChange = this.handleLinealFactorChange.bind(this);
        this.handleConstantFactorChange = this.handleConstantFactorChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

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

    render() {
        const cuadratic_factor = this.state.cuadratic_factor;
        const lineal_factor = this.state.lineal_factor;
        const constant_factor = this.state.constant_factor;
        const solution = SolutionParabolaVertex(cuadratic_factor, lineal_factor, constant_factor);
        const result = CalculateParabolaVertex(cuadratic_factor, lineal_factor, constant_factor);
        
        return (
            <form className="w3-container w3-card-4 w3-light-sand w3-text-khaki w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-khaki">
                    <h1 className="w3-center">Calcular Vértice de Parábola</h1>
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
                    <img src={img_formula_vertice} alt="" />
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
            </form>
        );
    }
}

ReactDOM.render (
    <ParabolaVertexCalculator />,
    document.getElementById('root')
);

export default ParabolaVertexCalculator;