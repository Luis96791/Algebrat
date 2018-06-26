import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img_heron from '../assets/formula-heron.jpg';

require('../styles/w3.css');

function CalculateSemiperimeter(sideA, sideB, sideC) {
    if (sideA === 0 || sideB === 0 || sideC === 0 ) {
        return 0;
    }
    
    return ((sideA + sideB + sideC)/2);
}

function CalculateHeron(_sideA, _sideB, _sideC) {
    const sideA = parseFloat(_sideA);
    const sideB = parseFloat(_sideB);
    const sideC = parseFloat(_sideC);

    if (Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
        return '--';
    }

    //semiperimetro
    const smprmt = CalculateSemiperimeter(sideA, sideB, sideC);

    var result = Math.sqrt((smprmt*(smprmt-sideA)*(smprmt-sideB)*(smprmt-sideC)));
    return result+" u²";
}

function SolutionHeron(_sideA, _sideB, _sideC) {
    const sideA = parseFloat(_sideA);
    const sideB = parseFloat(_sideB);
    const sideC = parseFloat(_sideC);
    const smprmt = CalculateSemiperimeter(sideA, sideB, sideC);

    if (Number.isNaN(sideA) || Number.isNaN(sideB) || Number.isNaN(sideC)) {
        return '';
    }

    var result = 's = ('+sideA+' + '+sideB+' + '+sideC+') / 2 = '+(sideA+sideB+sideC)+' / 2 = '+smprmt+' u'+
                '\n\nÁrea = √(('+smprmt+')('+smprmt+'-'+sideA+')('+smprmt+'-'+sideB+')('+smprmt+'-'+sideC+'))'+
                '\nÁrea = √('+smprmt+' · '+(smprmt-sideA)+' · '+(smprmt-sideB)+' · '+(smprmt-sideC)+')'+
                '\nÁrea = √'+(smprmt*(smprmt-sideA)*(smprmt-sideB)*(smprmt-sideC));
    

    return result;
}

class HeronCalculator extends Component {
    constructor(props) {
        super(props);

        this.handleSideAChange = this.handleSideAChange.bind(this);
        this.handleSideBChange = this.handleSideBChange.bind(this);
        this.handleSideCChange = this.handleSideCChange.bind(this);
        this.handleSolutionChange = this.handleSolutionChange.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);

        this.state = {
            sideA: '',
            sideB: '',
            sideC: ''
        }
    }

    handleSideAChange(event) {
        this.setState({sideA: event.target.value});
    }

    handleSideBChange(event) {
        this.setState({sideB: event.target.value});
    }

    handleSideCChange(event) {
        this.setState({sideC: event.target.value});
    }

    handleSolutionChange(event) {
        this.props.onSolutionChange(event.target.value);
    }

    handleResultChange(event) {
        this.props.onResultChange(event.target.value);
    }

    render() {
        const sideA = this.state.sideA;
        const sideB = this.state.sideB;
        const sideC = this.state.sideC;
        const solution = SolutionHeron(sideA, sideB, sideC);
        const result = CalculateHeron(sideA, sideB, sideC);

        return (
            <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin w3-margin-top w3-margin-left w3-margin-right w3-margin-button">
                <div className="w3-container w3-light-blue">
                    <h1 className="w3-center">Fórmula de Herón</h1>
                </div>
                <p>
                    <input className="w3-input" value={sideA} onChange={this.handleSideAChange} />
                    <label>Lado [A]</label>
                </p>
                <p>
                    <input className="w3-input" value={sideB} onChange={this.handleSideBChange} />
                    <label>Lado [B]</label>
                </p>
                <p>
                    <input className="w3-input" value={sideC} onChange={this.handleSideCChange} />
                    <label>Lado [C]</label>
                </p>
                <p>
                    <img src={img_heron} alt="formula heron" /> 
                    <br />
                    <label>Fórmula</label>
                </p>
                <p>
                    <textarea value={solution} onChange={this.handleSolutionChange} disabled ></textarea>
                    <br />
                    <label>Procedimiento</label>
                </p>
                <p>
                    <input className="w3-input" value={result} onChange={this.handleResultChange} disabled />
                    <label>Resultado</label>
                </p>
            </form>
        );
    }
}

ReactDOM.render (
    <HeronCalculator />,
    document.getElementById('root')
);

export default HeronCalculator;