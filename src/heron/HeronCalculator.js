import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import img_heron from '../assets/formula-heron.jpg';

require('../styles/w3.css');

function SolutionHeron(_side_a, _side_b, _side_c) {
    const side_a = parseFloat(_side_a);
    const side_b = parseFloat(_side_b);
    const side_c = parseFloat(_side_c);

    if (Number.isNaN(side_a) || Number.isNaN(side_b) || Number.isNaN(side_c)) {
        return '--';    
    }
    var semp = (side_a+side_b+side_c)/2;
    var res_a = semp-side_a;
    var res_b = semp-side_b;
    var res_c = semp-side_c;

    var result = 's = ('+side_a+'+'+side_b+'+'+side_c+')/2\n\n'+
                'área = √('+semp+'('+semp+'-'+side_a+')('+semp+'-'+side_b+')('+semp+'-'+side_c+'))\n'+
                'área = √(('+semp+')('+(semp-side_a)+')('+(semp-side_b)+')('+(semp-side_c)+'))\n'+
                'área = √'+(semp*(res_a)*(res_b)*(res_c))+'\n';


    return result;
}

function CalculateHeron(_side_a, _side_b, _side_c) {
    const side_a = parseFloat(_side_a);
    const side_b = parseFloat(_side_b);
    const side_c = parseFloat(_side_c);

    if (Number.isNaN(side_a) || Number.isNaN(side_b) || Number.isNaN(side_c)) {
        return '--';    
    }
    var semp = (side_a+side_b+side_c)/2;
    var res_a = semp-side_a;
    var res_b = semp-side_b;
    var res_c = semp-side_c;

    var product = (semp*res_a*res_b*res_c);

    var result = Math.sqrt(product);

    return parseFloat(result).toPrecision(2);
}

class HeronCalculator extends Component {
    constructor (props) {
        super(props);

        this.handleSideAChange = this.handleSideAChange.bind(this);
        this.handleSideBChange = this.handleSideBChange.bind(this);
        this.handleSideCChange = this.handleSideCChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

        this.state = {
            side_a: '',
            side_b: '',
            side_c: ''
        };
    }

    handleSideAChange(event) {
        this.setState({side_a: event.target.value});
    }

    handleSideBChange(event) {
        this.setState({side_b: event.target.value});
    }

    handleSideCChange(event) {
        this.setState({side_c: event.target.value});
    }

    handleSolutionChange(event) {
        this.onResultChange(event.target.value);
    }

    handleResultChange(event) {
        this.onResultChange(event.target.value);
    }

    render () {
        const side_a = this.state.side_a;
        const side_b = this.state.side_b;
        const side_c = this.state.side_c;
        const solution = SolutionHeron(side_a, side_b, side_c);
        const result = CalculateHeron(side_a, side_b, side_c);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-deep-orange w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button" >
                <div className="w3-container w3-deep-orange">
                    <h1 className="w3-center">Fórmula de Herón</h1>
                </div>
                <p>
                    <input className="w3-input" value={side_a} onChange={this.handleSideAChange} />
                    <label>Ingrese lado [a]</label>
                </p>
                <p>
                    <input className="w3-input" value={side_b} onChange={this.handleSideBChange} />
                    <label>Ingrese lado [b]</label>
                </p>
                <p>
                    <input className="w3-input" value={side_c} onChange={this.handleSideCChange} />
                    <label>Ingrese lado [c]</label>
                </p>
                <p>
                    <img src={img_heron} alt="formula heron" /> 
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result} onChange={this.handleResultChange} />
                    <label>Resultado</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    < HeronCalculator />,
    document.getElementById('root')
);

export default HeronCalculator;