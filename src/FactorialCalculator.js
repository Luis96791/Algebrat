import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from './assets/factorial.png';

require('./styles/w3.css');

function CalculateFactorial(number) {
    const _number = parseFloat(number);

    if(Number.isNaN(_number)) {
        return '';
    }

    var factorial = 1;

    for (var i = 1; i <= _number; i++) {
        factorial *= i;
    }
    return factorial.toString();
}

function SolutionFactorial(number) {
    const _number = parseFloat(number);

    if(Number.isNaN(_number)) {
        return '';
    }

    var factorial = 'Result: numero!\n'+number+'! = ';

    if (_number === 0) {
        factorial = factorial.concat('Por definición');
        return factorial;
    }

    if (_number === 1) {
        factorial = factorial.concat('1 x 1');
        return factorial;
    }

    factorial = factorial.concat(number);

    for (var i = 1; i < _number; i++) {
        factorial = factorial.concat('('+number+'-'+i+')');
    }

    return factorial;
}

class FactorialCalculator extends Component {
    constructor(props) {
        super(props);
        
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

        this.state = {
            number: ''
        };
    }

    handleNumberChange(event) {
        this.setState({number: event.target.value});
    }

    handleImageChange(event) {
        this.setState({image: event.target.value});
    }

    handleSolutionChange(event) {
        this.props.onSolutionChange(event.target.value);
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const number = this.state.number;
        const solution = SolutionFactorial(number);
        const result = CalculateFactorial(number);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-green w3-margin">
                <div className="w3-container w3-green">
                    <h1 className="w3-center">Calcular Factorial</h1>
                </div>
                <p>
                    <input className="w3-input" value={number} onChange={this.handleNumberChange} />
                    <label>Numero</label>
                </p>
                <p>
                    <img src={img} />
                    <br/>
                    <label>Formula</label>
                </p>
                <p>
                    <textarea className="w3-input" value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
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

ReactDOM.render(
    <FactorialCalculator />,
    document.getElementById('root')
);

export default FactorialCalculator;