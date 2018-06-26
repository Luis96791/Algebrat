import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DiscriminantFactorCalculator from './DiscriminantFactorCalculator';

require('../styles/DiscriminantFactorFunction.css');

class DiscriminantFactorFunction extends Component {
    constructor(props) {
        super(props);
        this.handleDiscriminantFactorClick = this.handleDiscriminantFactorClick.bind(this);

        this.state = {
            isAction: false
        };
    }

    handleDiscriminantFactorClick() {
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
                    <DiscriminantFactor isAction={isAction}/>
                </label>
                <DiscriminantFactorButton 
                    onClick={this.handleDiscriminantFactorClick}
                />
            </div>
        ); 
    }
}

function DiscriminantFactor(props) {
    const isAction = props.isAction;
    if(isAction) {
        return(
            <div>
                <DiscriminantFactorCalculator />
            </div>
        );
    }
    return null;
}

function DiscriminantFactorButton(props) {
    return (
        <button onClick={props.onClick} className="discriminantFactor-button">
            Factor Discriminante
        </button>
    );
}

ReactDOM.render(
    <DiscriminantFactorFunction />,
    document.getElementById('root')
);

export default DiscriminantFactorFunction;
