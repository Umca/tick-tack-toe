/**
 * Created by Horizone on 08.03.2017.
 */
export const makeMove = (row, position, symbol) => ({
    type:'MAKE_MOVE',
    symbol,
    row,
    position
});

export const reStart = () => ({
    type: 'RE_START'
})
