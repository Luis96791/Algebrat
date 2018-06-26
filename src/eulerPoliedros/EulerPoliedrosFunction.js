import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EulerPoliedrosCalculator from './EulerPoliedrosCalculator';

require('../styles/EulerPoliedrosFunction.css');

class EulerPoliedrosFunction extends Component {
    constructor(props) {
        super(props);
        this.handleEulerPoliedrosClick = this.handleEulerPoliedrosClick.bind(this);

        this.state = {
            isAction: false
        };
    }

    handleEulerPoliedrosClick() {
        if(this.state.isAction) {
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
                    <EulerPoliedros isAction={isAction}/>
                </label>
                <EulerPoliedrosButton 
                    onClick={this.handleEulerPoliedrosClick}
                />
            </div>
        ); 
    }
}

function EulerPoliedros(props) {
    const isAction = props.isAction;
    if(isAction) {
        return(
            <div>
                < EulerPoliedrosCalculator />
            </div>
        );
    }
    return null;
}

function EulerPoliedrosButton(props) {
    return (
        <button onClick={props.onClick} className="eulerPoliedros-button">
            Fórmula de Euler (Poliedros)
        </button>
    );
}

ReactDOM.render(
    <EulerPoliedrosFunction />,
    document.getElementById('root')
);

export default EulerPoliedrosFunction;
