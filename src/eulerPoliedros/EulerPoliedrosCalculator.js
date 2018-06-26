import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../styles/w3.css');

function GetVariableId(value) {
    if(value == 0) {
        return 0;
    }
}

class EulerPoliedrosCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleSelectionVariableChange = this.handleSelectionVariableChange.bind(this);
                
        this.state = {
            vertices: '',
            caras: '',
            aristas: '',
            variable: ''
        }
    }

    handleSelectionVariableChange(event) {
        this.setState({variable: event.target.value});
    }

    render() {
        const variable = this.state.variable;

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-lime w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-lime">
                    <h1 className="w3-center">Calcular Factor Discriminante</h1>
                </div>
                <p>
                <select className="w3-card-4 w3-select w3-text-lime " name="option">
                    <option value="" disabled selected>Escoja una variable</option>
                    <option value={variable} onChange={this.handleSelectionVariableChange} >A (n de aristas)</option>
                    <option value="2">C (n de caras)</option>
                    <option value="3">V (n de vértices)</option>
                </select>
                </p>
                <p>

                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <EulerPoliedrosCalculator />,
    document.getElementById('root')
);

export default EulerPoliedrosCalculator;