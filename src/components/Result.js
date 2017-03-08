/**
 * Created by Horizone on 08.03.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Result extends Component{
    render(){
        console.log(0, this.props)
        let result ='';
        if(this.props.turn){
            result = `It's ${this.props.turn.toUpperCase()} 's turn.`;
        }
        if(this.props.won){
            result = `Yay! ${this.props.won.toUpperCase()} won!`
        } else if(this.props.draw){
            result = 'We have a draw!'
        }

        return(
            <div>
                <p>
                    {result}
                </p>
            </div>
        )
    }
}

export default connect(
    ({won, turn, draw}) => ({
        won, turn, draw
    })
)(Result);

export {Result as PureResult}
