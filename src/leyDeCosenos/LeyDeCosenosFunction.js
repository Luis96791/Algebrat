import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeyDeCosenosCalculator from './LeyDeCosenosCalculator.js';

require('../styles/LeyDeCosenosFunction.css');

class LeyDeCosenosFunction extends Component {
    constructor(props) {
        super(props);
        this.handleLeyDeCosenosClick = this.handleLeyDeCosenosClick.bind(this);
        this.state = {
            isAction: false
        }
    };

    handleLeyDeCosenosClick() {
        if (this.state.isAction) {
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
                    <LeyDeCosenos isAction={isAction} />
                </label>
                <LeyDeCosenosButton onClick={this.handleLeyDeCosenosClick} />
            </div>
        );
    }
}

function LeyDeCosenos(params) {
    if(params.isAction) {
        return (
            <div>
                < LeyDeCosenosCalculator />
            </div>
        );
    }
    return null;
}

function LeyDeCosenosButton(params) {
    return (
        <button onClick={params.onClick} className="ley-cosenos-button">
            Ley De Cosenos
        </button>
    );
}

ReactDOM.render (
    <LeyDeCosenosFunction />,
    document.getElementById('root')
);

export default LeyDeCosenosFunction;