import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./styles/w3.css');

function CalculatePotency(base, exponent) {
	const _base = parseFloat(base);
	const _exponent = parseFloat(exponent);
	if (Number.isNaN(_base) || Number.isNaN(_exponent)) {
		return '';
	}

	const potency = Math.pow(_base, _exponent);
	return potency.toString(); 
}

function SolutionPotency(base, exponent) {
	const _base = parseFloat(base);
	const _exponent = parseFloat(exponent);
	if (Number.isNaN(_base) || Number.isNaN(_exponent)) {
		return '';
	}

	var potency = '';
	potency = potency.concat('Result: base ^ exponente\n');
	
	for (var i = 1; i < _exponent; i++) {
		if (i < _exponent) {
			potency = potency.concat(base+' x ');	
		}
	}
	potency = potency.concat(base);

	return potency;
}

class PotencyCalculator extends Component {
	constructor(props) {
		super(props);
		
		this.handleBaseChange = this.handleBaseChange.bind(this);
		this.handleExponentChange = this.handleExponentChange.bind(this);
		this.handleSolutionChange = this.handleSolutionChange.bind(this);
		this.handleResultChange = this.handleResultChange.bind(this);

		this.state = {
			base: '',
			exponent: ''
		};
		
	}

	handleBaseChange(event) {
		this.setState({base: event.target.value});
	}

	handleExponentChange(event) {
		this.setState({exponent: event.target.value});
	}

	handleSolutionChange(event) {
		this.props.onResultChange(event.target.value);
	}

	handleResultChange(event) {
		this.props.onResultChange(event.target.value);
	}

	render() {
		const base = this.state.base;
		const exponent = this.state.exponent;
		const solution = SolutionPotency(base, exponent); 
		const result = CalculatePotency(base, exponent);

		return (
			<form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
				<div className="w3-container w3-blue">
					<h1 className="w3-center">Elevar a Potencia de N</h1>
				</div>
                <p>
                    <input className="w3-input" value={base} onChange={this.handleBaseChange} />
                    <label>Base</label>
                </p>
                <p>
                    <input className="w3-input" value={exponent} onChange={this.handleExponentChange} />
                    <label>Exponente</label>
                </p>
				<p>
					<textarea className="w3-input" value={solution} onChange={this.handleSolutionChange} disabled></textarea>
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
	<PotencyCalculator />,
  	document.getElementById('root')
); 

export default PotencyCalculator;