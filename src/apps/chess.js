import styled from 'styled-components';
import React, {useState} from 'react';
import board from '../img/chessBoard.png';
import pawn from '../img/pawnPiece.png';
import tower from '../img/towerPiece.png';
import bishop from '../img/bishopPiece.png';
import horse from '../img/horsePiece.png';
import queen from '../img/queenPiece.png';
import king from '../img/kingPiece.png';
import empty from '../img/empty.png';

const Board = styled.img`
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
`

const BoardPieces = styled.div`
    position:absolute;
    bottom: 130px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1px;
    @media screen and (max-width:800px;) {
        bottom: 110px;
    }
`

const OnePiece = styled.img`
    :hover { background-color: red; }
`
/*
function selecionarPeça(piece, rows, setPieces){

}
*/

function moverPeças(Pieces, selecionar, setPieces){
    let newBoard = [
        [Pieces[0][0], Pieces[0][1], Pieces[0][2], Pieces[0][3], Pieces[0][4], Pieces[0][5], Pieces[0][6], Pieces[0][7]],
        [Pieces[1][0], Pieces[1][1], Pieces[1][2], Pieces[1][3], Pieces[1][4], Pieces[1][5], Pieces[1][6], Pieces[1][7]],
        [Pieces[2][0], Pieces[2][1], Pieces[2][2], Pieces[2][3], Pieces[2][4], Pieces[2][5], Pieces[2][6], Pieces[2][7]],
        [Pieces[3][0], Pieces[3][1], Pieces[3][2], Pieces[3][3], Pieces[2][4], Pieces[3][5], Pieces[3][6], Pieces[3][7]],
        [Pieces[4][0], Pieces[4][1], Pieces[4][2], Pieces[4][3], Pieces[3][4], Pieces[4][5], Pieces[4][6], Pieces[4][7]],
        [Pieces[5][0], Pieces[5][1], Pieces[5][2], Pieces[5][3], Pieces[4][4], Pieces[5][5], Pieces[5][6], Pieces[5][7]],
        [Pieces[6][0], Pieces[6][1], Pieces[6][2], Pieces[6][3], Pieces[6][4], Pieces[6][5], Pieces[6][6], Pieces[6][7]],
        [Pieces[7][0], Pieces[7][1], Pieces[7][2], Pieces[7][3], Pieces[7][4], Pieces[7][5], Pieces[7][6], Pieces[7][7]],
    ]
    //newBoard[0,0] = empty
    setPieces(newBoard)
}

function criandoCampo(Pieces, setPieces, selecionar, setSelecionar){
    let rows = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++) {
            rows.push(<OnePiece 
                src={Pieces[i][j]} 
                key={i + "-" + j} 
                onClick={() => {(Pieces[i][j] != empty) ? setSelecionar(Pieces[i][j]) : moverPeças(Pieces, selecionar, setPieces)}} 
                alt="campo" 
                width={48} 
                height={48}
            >
            </OnePiece>)
        } 
    }
    return rows;
}

function Chess(color) {
    const [selecionar, setSelecionar] = useState(empty)
    const [Pieces, setPieces] = useState([
        [tower, bishop, horse, king, queen, horse, bishop, tower],
        [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty],
        [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
        [tower, bishop, horse, king, queen, horse, bishop, tower],
        /*
        [2, 3, 4, 6, 5, 4, 3, 2],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 3, 4, 5, 6, 4, 3, 2],
        */
    ]);
    return (
        <>
            <Board color={color.color} src={board} alt="chess" width={480} height={480}></Board>
            <BoardPieces>{criandoCampo(Pieces, setPieces, selecionar, setSelecionar)}</BoardPieces>
        </>
    );
}
export default Chess;