import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../styles/w3.css');

function CalculateTCP(_x, _y) {
    const x = parseFloat(_x);
    const y = parseFloat(_y);

    if(Number.isNaN(x) || Number.isNaN(y)) {
        return '--';
    }

    var tcp = Math.pow(x, 2)+2*(x*y)+Math.pow(y, 2);
    return tcp;
}

function SolutionTCP(x, y) {
    var tcp = '';
    
    if(x === '' || y === '')
        return '';
    
    
    tcp = tcp.concat('(x+y)² = x² + 2xy + y²\n'+
    '(x+y)² = ('+x+')² + 2('+x+')('+y+') + ('+y+')²');

    return tcp;
}

class TCPCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleXChange = this.handleXChange.bind(this);
        this.handleYChange = this.handleYChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

        this.state = {
            x: '',
            y: ''
        };
    }

    handleXChange(event) {
        this.setState({x: event.target.value});
    }

    handleYChange(event) {
        this.setState({y: event.target.value});
    }

    handleSolutionChange(event) {
        this.props.onSolutionChange(event.target.value);
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const x = this.state.x;
        const y = this.state.y;
        const solution = SolutionTCP(x, y);
        const result = CalculateTCP(x, y);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-teal">
                    <h1 className="w3-center">Calcular Trinomio Cuadrado Perfecto</h1>
                </div>
                <p>
                    <input className="w3-input" value={x} onChange={this.handleXChange} />
                    <label>Valor 1 [X]</label>
                </p>
                <p>
                    <input className="w3-input" value={y} onChange={this.handleYChange} />
                    <label>Valor 2 [Y]</label>
                </p>
                <p>
                    <textarea className="w3-textarea" value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br/>
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
    <TCPCalculator />,
    document.getElementById('root')
);

export default TCPCalculator;