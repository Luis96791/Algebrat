import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import HeronCalculator from './HeronCalculator.js';

require('../styles/HeronFunction.css');

class HeronFunction extends Component {
    constructor(props) {
        super(props);
        this.handleHeronClick = this.handleHeronClick.bind(this);
        this.handleHeronMouseOver = this.handleHeronMouseOver.bind(this);
        this.state = {
            isAction: false
        };
    }

    handleHeronClick() {
        if(this.state.isAction) {
            this.setState({isAction: false});
        } else {
            this.setState({isAction: true});
        }
    }

    handleHeronMouseOver() {
        console.log("Hola");
    }

    render() {
        const isAction = this.state.isAction;

        return (
            <div>
                <label>
                    <Heron isAction={isAction}/>
                </label>
                <HeronButton 
                    onClick={this.handleHeronClick} 
                    onMouseOver={this.handleHeronMouseOver}
                />
            </div>
        );
    }
}

function Heron(props) {
    const isAction = props.isAction;
    if(isAction) {
        return (
            <div>
               /** HeronCalculator */
            </div>
        );
    }
    return null;
}

function HeronButton(props) {
    return (
        <button onClick={props.onClick} onMouseOver={props.onMouseOver} className="heron-button">
            Fórmula de Herón
        </button>
    );
}

ReactDOM.render(
    <HeronFunction />,
    document.getElementById('root')
);

export default HeronFunction;