import styled from 'styled-components';
import React, {useState, useRef} from 'react';
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
    filter: brightness(${p => (p.bright)}%);
    :hover { background-color: red; }
`

const ResetBtn = styled.button`
    position: absolute;
    top: 535px;
    background-color: #036512;
    color: white;
    border-color: white;
    :hover { background-color: red; }
`

function resetar(setSelecionar, setPieces, turn){
    setSelecionar([empty, 0, 0]);
    setPieces([
        [[tower,50], [bishop,50], [horse,50], [king,50], [queen,50], [horse,50], [bishop,50], [tower,50]],
        [[pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100]],
        [[tower,100], [bishop,100], [horse,100], [king,100], [queen,100], [horse,100], [bishop,100], [tower,100]],
    ]);
    turn.current = 100;
}

function temAlgoEntre(newBoard, selecionar, i, j){
    let x = i;
    let y = j; 
    while (true) {
        if (x < selecionar[1]) x++;
        else if (x > selecionar[1]) x--;
        if (y < selecionar[2]) y++;
        else if (y > selecionar[2]) y--;
        if (x === selecionar[1] && y === selecionar[2]) return true;
        if (newBoard[x][y][1] !== 0) return false;
    }
}

function checarBispo(selecionar, i, j){
    if (selecionar[1] != i && selecionar[2] != j){
        let casasAndadasH = selecionar[1] - i;
        let casasAndadasV = selecionar[2] - j;
        if (casasAndadasH < 0) casasAndadasH *= -1;
        if (casasAndadasV < 0) casasAndadasV *= -1;
        if (casasAndadasH === casasAndadasV) return true;
    }
    return false;
}

function checarCavalo(selecionar, i, j){
   if ((selecionar[1] === i + 1 || selecionar[1] === i - 1) && (selecionar[2] === j - 2 || selecionar[2] === j + 2)) return true;
   else if (((selecionar[1] === i + 2 || selecionar[1] === i - 2) && (selecionar[2] === j - 1 || selecionar[2] === j + 1))) return true;
   return false;
}

function checarPeao(newBoard, selecionar, i, j) {
    if (selecionar[2] === j) {
        if (selecionar[0][1] === 100) {
            if (selecionar[1] === i + 1) return true;
            else if (i === 4 && selecionar[1] === i + 2) return true;
        } 
        else if (selecionar[0][1] === 50) {
            if (selecionar[1] === i - 1) return true;
            else if (i === 3 && selecionar[1] === i - 2) return true;
        } 
    } else if (selecionar[2] === j + 1 || selecionar[2] === j - 1) {
        if (selecionar[0][1] === 100 && selecionar[1] === i + 1 && newBoard[i][j][1] === 50) return true;
        else if (selecionar[0][1] === 50 && selecionar[1] === i - 1 && newBoard[i][j][1] === 100) return true;
    } 
    return false;
}

function podeMover(selecionar, newBoard, i, j) { 
    switch (selecionar[0][0]) { 
        case pawn: if (checarPeao(newBoard, selecionar, i, j)) return temAlgoEntre(newBoard, selecionar, i, j); break;
        case king: if (selecionar[1] === i + 1 || selecionar[2] === j + 1 || selecionar[1] === i - 1 || selecionar[2] === j - 1) return temAlgoEntre(newBoard, selecionar, i, j); break;
        case tower: if (selecionar[1] === i || selecionar[2] === j) return temAlgoEntre(newBoard, selecionar, i, j); break;
        case bishop:  if (checarBispo(selecionar, i, j)) return temAlgoEntre(newBoard, selecionar, i, j); break;
        case queen: if (selecionar[1] === i || selecionar[2] === j || checarBispo(selecionar, i, j)) return temAlgoEntre(newBoard, selecionar, i, j); break;
        case horse: if (checarCavalo(selecionar, i, j)) return true; break;
        default: return false;
    } 
    return false;
} 

function moverPeças(rows, Pieces, selecionar, setPieces, i, j, turn){
    if (selecionar[0] !== [empty,0] && Pieces[selecionar[1]][selecionar[2]][1] === turn.current) {
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
        if (podeMover(selecionar, newBoard, i, j)) {
            if (turn.current === 100) turn.current = 50;
            else turn.current = 100;
            if (newBoard[i][j][0] === king) turn.current = 75;
            newBoard[i][j] = selecionar[0]
            newBoard[selecionar[1]][selecionar[2]] = [empty,0]
            setPieces(newBoard)
        }
    }
}

function criandoCampo(Pieces, setPieces, selecionar, setSelecionar, turn){
    let rows = [];
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++) {
            rows.push(<OnePiece 
                src={Pieces[i][j][0]} 
                key={i + "-" + j} 
                onClick={() => {(Pieces[i][j][1] === turn.current) ? setSelecionar([Pieces[i][j], i, j]) : moverPeças(rows, Pieces, selecionar, setPieces, i, j, turn)}} 
                alt="campo" 
                width={48} 
                height={48}
                bright={Pieces[i][j][1]}
            >
            </OnePiece>)
        } 
    }
    return rows;
}

function Chess(color) {
    const [selecionar, setSelecionar] = useState([empty, 0, 0]) 
    const [Pieces, setPieces] = useState([
        [[tower,50], [bishop,50], [horse,50], [king,50], [queen,50], [horse,50], [bishop,50], [tower,50]],
        [[pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50], [pawn,50]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0], [empty,0]],
        [[pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100], [pawn,100]],
        [[tower,100], [bishop,100], [horse,100], [king,100], [queen,100], [horse,100], [bishop,100], [tower,100]],
    ]);
    const turn = useRef(100);
    return (
        <>
            <Board color={color.color} src={board} alt="chess" width={480} height={480}></Board>
            <BoardPieces>{criandoCampo(Pieces, setPieces, selecionar, setSelecionar, turn)}</BoardPieces>
            <ResetBtn onClick={() => resetar(setSelecionar, setPieces, turn)}>Reset</ResetBtn>
        </>
    );
}
export default Chess;