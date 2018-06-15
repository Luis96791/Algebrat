import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TCPCalculator from './TCPCalculator.js';

require('../styles/TCPFunction.css');

class TCPFunction extends Component {
    constructor(props) {
        super(props);
        this.handleTCPFunctionClick = this.handleTCPFunctionClick.bind(this);
        this.state = {
            isAction: false
        }
    }

    handleTCPFunctionClick() {
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
                    <TCP isAction={isAction}/>
                </label>
                <TCPButton onClick={this.handleTCPFunctionClick} />
            </div>
        );
    }
}

function TCP(props) {
    if(props.isAction) {
        return(
            <div>
                < TCPCalculator />
            </div>
        );
    }
    return null;
}

function TCPButton(props) {
    return (
        <button onClick={props.onClick} className="tcp-button">
            T.C.P.
        </button>
    );
}

ReactDOM.render(
    <TCPFunction />,
    document.getElementById('root')
);

export default TCPFunction;