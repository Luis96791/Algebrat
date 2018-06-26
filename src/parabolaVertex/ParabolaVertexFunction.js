import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ParabolaVertexCalculator from './ParabolaVertexCalculator';

require('../styles/ParabolaVertexFunction.css');

class ParabolaVertexFunction extends Component {
    constructor(props) {
        super(props);
        this.handleParabolaVertexClick = this.handleParabolaVertexClick.bind(this);

        this.state = {
            isAction: false
        };
    }

    handleParabolaVertexClick() {
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
                    <ParabolaVertex isAction={isAction}/>
                </label>
                <ParabolaVertexButton 
                    onClick={this.handleParabolaVertexClick}
                />
            </div>
        ); 
    }
}

function ParabolaVertex(props) {
    const isAction = props.isAction;
    if(isAction) {
        return(
            <div>
                <ParabolaVertexCalculator />
            </div>
        );
    }
    return null;
}

function ParabolaVertexButton(props) {
    return (
        <button onClick={props.onClick} className="parabolaVertex-button">
            Vértice de Parábola
        </button>
    );
}

ReactDOM.render(
    <ParabolaVertexFunction />,
    document.getElementById('root')
);

export default ParabolaVertexFunction;
