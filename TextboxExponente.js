import React, {Component} from 'react';
import './Textbox.css';

class TextboxExponente extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="btn-group">
					<button className="btn-exponente" onClick={this.handleClick}>
					<input 
						className="input" 
						type="text" value={this.state.value}
						placeholder="Enter a function..."/>
					
					<input 
						className="button submit" 
						type="submit" 
						value="Submit" />
					</button>	
				<div>	
			</form>
		);
}

export default TextboxExponente;