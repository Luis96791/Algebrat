import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PotencyCalculator from './PotencyCalculator.js';
require('./styles/PotencyFunction.css');

class PotencyFunction extends Component {
	constructor(props) {
		super(props);
		this.handleExponentClick = this.handleExponentClick.bind(this);
		this.state = {
			isAction: false
		};
	}

	handleExponentClick() {
		if (this.state.isAction) {
			this.setState({isAction: false});
		} else {
			this.setState({isAction: true});
		}
			
	}

	render() {
		const isAction = this.state.isAction;

		return (
			<div>
				<label>
					<Potency isAction={isAction} />
				</label>
				<ExponentButton onClick={this.handleExponentClick} />
			</div>
		);
	}
}

function Potency(props) {
	const isAction = props.isAction;
	if (isAction) {
		return (<div>
					<PotencyCalculator />
				</div>);
	}
	return null;
}

function ExponentButton(props) {
	return (
		<button onClick={props.onClick} className="potency-button">
			Potencia de N
		</button>
	);
}
        
ReactDOM.render(
	<PotencyFunction />,
  	document.getElementById('root')
);

export default PotencyFunction;
