import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FactorialCalculator from './FactorialCalculator.js';
require('./styles/FactorialFunction.css');

class FactorialFunction extends Component {
    constructor(props) {
        super(props);
        this.handleFactorialClick = this.handleFactorialClick.bind(this);
        this.state = {
            isAction: false
        };
    }
    
    handleFactorialClick() {
        if(this.state.isAction) {
            this.setState({isAction:false});
        } else {
            this.setState({isAction:true});
        }
    }
    
    render() {
        const isAction = this.state.isAction;
        
        return (
            <div>
                <label>
                    <Factorial isAction={isAction} />
                </label>
                <FactorialButton onClick={this.handleFactorialClick} />
            </div>
        );
    }
}

function Factorial(props) {
    const isAction = props.isAction;
    if(isAction) {
        return(
            <div>
                <FactorialCalculator />                
            </div>
        );
    }
    return null;
}

function FactorialButton(props) {
    return (
        <button onClick={props.onClick} className="factorial-button factorial-button2">
            Factorial
        </button>
    );
}

ReactDOM.render(
    <FactorialFunction />,
    document.getElementById('root')
);

export default FactorialFunction;