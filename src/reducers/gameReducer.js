/**
 * Created by Horizone on 08.03.2017.
 */
import {resultForSymbol} from '../services/getGameResult';
import * as _ from 'lodash';

const SYMBOLS = {
    O: 'O',
    X: 'X'
};

export const initialState = {
    board: {
        0: ['','',''],
        1: ['','',''],
        2: ['','','']
    },
    won: undefined,
    wonLine: undefined,
    draw: false,
    turn: SYMBOLS.O
}

export const gameReducer = (state, action) =>{
    switch (action.type){
        case 'MAKE_MOVE':
            const {symbol, row, position} = action;
            const newState = _.cloneDeep(state);
            newState.board[row][position] = symbol;

            const xResult = resultForSymbol(SYMBOLS.X, newState.board);
            const oResult = resultForSymbol(SYMBOLS.O, newState.board);

            if(xResult.won){
                newState.won = SYMBOLS.X;
                newState.wonLine = xResult.line;
            }

            if(oResult.won){
                newState.won = SYMBOLS.O;
                newState.wonLine = oResult.line;
            }

            if(!newState.won){
                newState.turn = newState.turn === SYMBOLS.O ? SYMBOLS.X : SYMBOLS.O;
            }

            const boardIsFull = [
                ...newState.board[0],
                ...newState.board[1],
                ...newState.board[2]
            ].filter(symbol => symbol !== '')
                .length === 9;
            if(boardIsFull && !newState.won){
                newState.draw = true;
            }

            return newState;
        case 'RE_START':
            return initialState;
        default:
            return initialState;
    }
};