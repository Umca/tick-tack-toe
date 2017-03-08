/**
 * Created by Horizone on 08.03.2017.
 */
import React from 'react';

const BlankSymbol = (props) => {
    return(
        <div className = 'symbol symbol--blank'
             onClick={()=>props.makeMove(props.turn)}>
        </div>
    )
};

export default BlankSymbol;