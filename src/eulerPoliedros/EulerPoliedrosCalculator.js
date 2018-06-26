import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../styles/w3.css');

class EulerPoliedrosCalculator extends Component {
    constructor(props) {
        super(props);


                
        this.state = {
            
        }
    }

    render() {
        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-lime w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-lime">
                    <h1 className="w3-center">Calcular Factor Discriminante</h1>
                </div>
                <p>
                <select className="w3-card-4 w3-select w3-text-lime " name="option">
                    <option value="" disabled selected>Escoja una variable</option>
                    <option value="1">Opcion 1</option>
                    <option value="2">Opcion 2</option>
                    <option value="3">Opcion 3</option>
                </select>
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