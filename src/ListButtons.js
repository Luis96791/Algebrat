import React, {Component} from 'react';
import PotencyFunction from './potency/PotencyFunction.js';
import FactorialFunction from './factorial/FactorialFunction.js';
import TCPFunction from './tcp/TCPFunction.js';
import GeneralCuadraticFunction from './generalCuadratic/GeneralCuadraticFunction.js';
import HeronFunction from './heron/HeronFunction.js';
import DifferenceSquareFunction from './differenceOfSquares/DifferenceSquaresFunction.js';
import DiscriminantFactorFunction from './discriminant/DiscriminantFactorFunction.js';
import ParabolaVertexFunction from './parabolaVertex/ParabolaVertexFunction.js';
import EulerPoliedrosFunction from './eulerPoliedros/EulerPoliedrosFunction.js';
import SQRTFunction from './squareRoot/squareRootFunction.js';
import CuadradoPerfectoFunction from './cuadradoPerfecto/CuadradoPerfectoFunction.js';
import LeyDeCosenosFunction from './leyDeCosenos/LeyDeCosenosFunction.js';
import FuncionSenoFunction from './funcionSeno/FuncionSenoFunction.js';
import FuncionCosenoFunction from './funcionCoseno/FuncionCosenoFunction.js';
import FuncionTangenteFunction from './funcionTangente/FuncionTangenteFunction.js';
import SumaFuncionSenoFunction from './expresionesSumaFuncionSeno/SumaFuncionSenoFunction.js';
import SumaFuncionCosenoFunction from './expresionesSumaFuncionCoseno/SumaFuncionCosenoFunction.js';
import SumaFuncionTangenteFunction from './expresionesSumaFuncionTangente/SumaFuncionTangenteFunction.js';
import DiferenciaFuncionSenoFunction from './expresionesDiferenciaFuncionSeno/DiferenciaFuncionSenoFunction.js';
import DiferenciaFuncionCosenoFunction from './expresionesDiferenciaFuncionCoseno/DiferenciaFuncionCosenoFunction.js';
import DiferenciaFuncionTangenteFunction from './expresionesDiferenciaFuncionTangente/DiferenciaFuncionTangenteFunction.js';

require('./styles/ListButtons.css');


class ListButtons extends Component {
    render() {
        return (
            <li>
                < DiferenciaFuncionTangenteFunction />
                < DiferenciaFuncionCosenoFunction />
                < DiferenciaFuncionSenoFunction />
                < SumaFuncionTangenteFunction />
                < SumaFuncionCosenoFunction />
                < SumaFuncionSenoFunction />
                < FuncionTangenteFunction />
                < FuncionCosenoFunction />
                < FuncionSenoFunction />
                < LeyDeCosenosFunction />
                < CuadradoPerfectoFunction />
                < SQRTFunction />
                < EulerPoliedrosFunction />
                < ParabolaVertexFunction />
                < DiscriminantFactorFunction />
                < DifferenceSquareFunction />
                < HeronFunction />
                < GeneralCuadraticFunction />
                < TCPFunction />
                < FactorialFunction />
                < PotencyFunction />
            </li>
        );
    }
}

export default ListButtons;