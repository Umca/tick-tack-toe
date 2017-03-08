/**
 * Created by Horizone on 08.03.2017.
 */
import React, { Component } from 'react';
import BlankSymbol from './BlankSymbol';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import { makeMove, reStart } from '../actions/actions';
import { connect } from 'react-redux';

class Board extends Component {

    makeMove (rowIndex, position, symbol) {
        !this.props.won && this.props.makeMove(rowIndex, position, symbol);
    }

    getSymbol(rowIndex, position, symbol) {
        if (symbol === 'X') {
            return <XSymbol key={position} position={position} />;
        }
        if (symbol === 'O') {
            return <OSymbol key={position} position={position} />;
        }
        return <BlankSymbol key={position} makeMove={this.makeMove.bind(this, rowIndex, position)} turn={this.props.turn} />;
    }

    render() {
        console.log(1, this.props);
        const wonClass   = this.props.won ? ` won-${this.props.wonLine}` : '';
        const drawClass  = this.props.draw ? ' draw' : '';
        const boardClass = 'board' + wonClass + drawClass;
        return (
            <div className={boardClass}>
                {
                    Object.keys(this.props.board)
                        .map(rowIndex => {
                            return (
                                <div className={`row row${rowIndex}`} key={rowIndex}>
                                    {
                                        this.props.board[rowIndex].map((symbol, positon) => {
                                            console.log(3, symbol, positon)
                                            return this.getSymbol(rowIndex, positon, symbol);
                                        })
                                    }
                                </div>
                            );
                        })
                }
                {
                    this.props.won || this.props.draw ?
                        <p className="startAgain" onClick={this.props.reStart}>
                            Click to start again!
                        </p> : false
                }
            </div>
        );
    }
}


export default connect(
    ({board, turn, won, draw, wonLine}) => ({
        board, turn, won, draw, wonLine
    }),
    (dispatch) => {
        return {
            makeMove (rowIndex, position, symbol) {
                dispatch(makeMove(rowIndex, position, symbol));
            },
            reStart () {
                dispatch(reStart());
            }
        };
    }
)(Board);

export {Board as PureBoard};