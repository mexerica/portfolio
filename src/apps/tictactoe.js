import styled from 'styled-components';
import React, {useState} from 'react';
import empty from '../img/empty.png';
import tic from '../img/tic.png';
import tac from '../img/tac.png';
import toe from '../img/toe.png';

const Fixed = styled.div`
    position:fixed;
`

const Game = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.1px;
`

const BtnReset = styled.div`
position:fixed;
    bottom:80px;
`

let type = tac;
let notFinished = true;

function updateBoard(xy, setXY, position){
    if (notFinished) {
        let values = [];
        for(let i = 0; i < 10; i++){
            if (i == position && xy[i] == empty){
                values.push(type)
                if (type == tac) type = toe
                else type = tac
            } 
            else values.push(xy[i]) 
        }
        setXY(values);
        checkBoard(values)
        console.log(notFinished)
    }
}

function checkBoard(values){ /*
    for(let j = 0; j < 3; j++){
        if (values[j] == values[j + 3] == values[j + 6] != empty || values[j * 3] == values[j * 3 + 1] == values[j * 3 + 2] != empty) {
            notFinished = false;
            break;
        }    
    } */
    if (notFinished && values[4] != empty){
        if (values[1] == values[5] == values[8]) notFinished = false;
        else if (values[2] == values[5] == values[9]) notFinished = false; 
    } 
}

function Tictactoe() {
    const [xy, setXY] = useState([empty, empty, empty, empty, empty, empty, empty, empty, empty]);
    return (
        <>
            <Fixed><img src={tic} alt="board" width={480} height={480}/></Fixed>
            <Fixed> 
                <Game>
                    <img src={xy[0]} onClick={() => {updateBoard(xy, setXY, 0)}} alt="x" width={160} height={160}/>
                    <img src={xy[1]} onClick={() => {updateBoard(xy, setXY, 1)}} alt="x" width={160} height={160}/>
                    <img src={xy[2]} onClick={() => {updateBoard(xy, setXY, 2)}} alt="x" width={160} height={160}/>
                    <img src={xy[3]} onClick={() => {updateBoard(xy, setXY, 3)}} alt="x" width={160} height={160}/>
                    <img src={xy[4]} onClick={() => {updateBoard(xy, setXY, 4)}} alt="x" width={160} height={160}/>
                    <img src={xy[5]} onClick={() => {updateBoard(xy, setXY, 5)}} alt="x" width={160} height={160}/>
                    <img src={xy[6]} onClick={() => {updateBoard(xy, setXY, 6)}} alt="x" width={160} height={160}/>
                    <img src={xy[7]} onClick={() => {updateBoard(xy, setXY, 7)}} alt="x" width={160} height={160}/>
                    <img src={xy[8]} onClick={() => {updateBoard(xy, setXY, 8)}} alt="x" width={160} height={160}/>
                </Game>
            </Fixed>
            <BtnReset onClick={() => {setXY([empty, empty, empty, empty, empty, empty, empty, empty, empty])}}><button>Reset</button></BtnReset>
        </>
    );
}

export default Tictactoe;