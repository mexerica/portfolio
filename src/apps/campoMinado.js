import styled from 'styled-components';
import React, {useState} from 'react';
import campo from '../img/campo.PNG';
import smile from '../img/smile.PNG';
import minas from '../img/minas.PNG';
import bloco from '../img/bloco.png';
import semmina from '../img/semmina.png';
import bomba1 from '../img/1bomba.png';
import bomba2 from '../img/2bomba.png';
import bomba3 from '../img/3bomba.png';
import bomba4 from '../img/4bomba.png';
import bomba5 from '../img/5bomba.png';

const Back = styled.div`
    position:relative;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
    background-color: #faf4e4;
`

const Board = styled.div`
    position:fixed;
    bottom: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2px;
`

const Smile = styled.div`
    position:fixed;
    top: 110px;
`

let notFinished = false;

let respostas = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function criarResposta(quantResp){
    while(quantResp < 10){
        const x = Math.floor(Math.random() * 9);
        const y = Math.floor(Math.random() * 9);
        if (respostas[x][y] === 0) {
            respostas[x][y] = -1;
            if (x > 0) respostas[x - 1][y] += 1;
            if (x < 8) respostas[x + 1][y] += 1;
            if (y > 0) respostas[x][y - 1] += 1;
            if (y < 8) respostas[x][y + 1] += 1;
            if (x > 0 && y > 0) respostas[x - 1][y - 1] += 1;
            if (x > 0 && y < 8) respostas[x - 1][y + 1] += 1;
            if (x < 8 && y > 0) respostas[x + 1][y - 1] += 1;
            if (x < 8 && y < 8) respostas[x + 1][y + 1] += 1;
            quantResp++;
        }
    } 
    console.log(respostas)
}

function selecionar(mina, setMina, i , j){
    if (notFinished) {
        let values = [
            [mina[0][0], mina[0][1], mina[0][2], mina[0][3], mina[0][4], mina[0][5], mina[0][6], mina[0][7], mina[0][8]],
            [mina[1][0], mina[1][1], mina[1][2], mina[1][3], mina[1][4], mina[1][5], mina[1][6], mina[1][7], mina[1][8]],
            [mina[2][0], mina[2][1], mina[2][2], mina[2][3], mina[2][4], mina[2][5], mina[2][6], mina[2][7], mina[2][8]],
            [mina[3][0], mina[3][1], mina[3][2], mina[3][3], mina[3][4], mina[3][5], mina[3][6], mina[3][7], mina[3][8]],
            [mina[4][0], mina[4][1], mina[4][2], mina[4][3], mina[4][4], mina[4][5], mina[4][6], mina[4][7], mina[4][8]],
            [mina[5][0], mina[5][1], mina[5][2], mina[5][3], mina[5][4], mina[5][5], mina[5][6], mina[5][7], mina[5][8]],
            [mina[6][0], mina[6][1], mina[6][2], mina[6][3], mina[6][4], mina[6][5], mina[6][6], mina[6][7], mina[6][8]],
            [mina[7][0], mina[7][1], mina[7][2], mina[7][3], mina[7][4], mina[7][5], mina[7][6], mina[7][7], mina[7][8]],
            [mina[8][0], mina[8][1], mina[8][2], mina[8][3], mina[8][4], mina[8][5], mina[8][6], mina[8][7], mina[8][8]]
        ]
        if(respostas[i][j] === -1) {values[i][j] = minas; notFinished = false}
        else {
            for (let y = i; y >= 0; y--){
                for (let x = j; x >= 0; x--){
                    if(respostas[i][x] === -1) {break} 
                    else if (respostas[y][x] === 1) {values[y][x] = bomba1; break}
                    else if (respostas[y][x] === 2) {values[y][x] = bomba2; break}
                    else if (respostas[y][x] === 3) {values[y][x] = bomba3; break}
                    else if (respostas[y][x] === 4) {values[y][x] = bomba4; break}
                    else if (respostas[y][x] === 5) {values[y][x] = bomba5; break}
                    else values[y][x] = semmina;
                }
                for (let x = j; x <= 8; x++){
                    if(respostas[y][x] === -1) {break} 
                    else if (respostas[y][x] === 1) {values[y][x] = bomba1; break}
                    else if (respostas[y][x] === 2) {values[y][x] = bomba2; break}
                    else if (respostas[y][x] === 3) {values[y][x] = bomba3; break}
                    else if (respostas[y][x] === 4) {values[y][x] = bomba4; break}
                    else if (respostas[y][x] === 5) {values[y][x] = bomba5; break}
                    else values[y][x] = semmina;
                }
                if (values[y][j] !== semmina) break; 
            }
            for (let y = i; y <= 8; y++){
                for (let x = j; x >= 0; x--){
                    if(respostas[i][x] === -1) {break} 
                    else if (respostas[y][x] === 1) {values[y][x] = bomba1; break}
                    else if (respostas[y][x] === 2) {values[y][x] = bomba2; break}
                    else if (respostas[y][x] === 3) {values[y][x] = bomba3; break}
                    else if (respostas[y][x] === 4) {values[y][x] = bomba4; break}
                    else if (respostas[y][x] === 5) {values[y][x] = bomba5; break}
                    else values[y][x] = semmina;
                }
                for (let x = j; x <= 8; x++){
                    if(respostas[y][x] === -1) {break} 
                    else if (respostas[y][x] === 1) {values[y][x] = bomba1; break}
                    else if (respostas[y][x] === 2) {values[y][x] = bomba2; break}
                    else if (respostas[y][x] === 3) {values[y][x] = bomba3; break}
                    else if (respostas[y][x] === 4) {values[y][x] = bomba4; break}
                    else if (respostas[y][x] === 5) {values[y][x] = bomba5; break}
                    else values[y][x] = semmina;
                }
                if (values[y][j] !== semmina) break; 
            }
        }
        setMina(values);
    }
}

function criandoCampo(mina, setMina){
    let rows = [];
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++) rows.push(<img src={mina[i][j]} onClick={() => {selecionar(mina, setMina, i , j)}} key={i + "-" + j} alt="campo" width={36} height={36}/>)
    }
    return rows;
}

function resetarCampo(setMina){
    setMina([
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco]
    ]);
    notFinished = true;
    respostas = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    criarResposta(0);
}

function CampoMinado(color) {
    const [mina, setMina] = useState([
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco],
        [bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco, bloco]
    ]);
    return (
        <>
            <Back color={color.color}><img src={campo} alt="campo" width={480} height={480}/></Back>
            <Board>{criandoCampo(mina, setMina)}</Board>
            <Smile><img src={smile} onClick={() =>{(resetarCampo(setMina))}} alt="campo" width={72} height={72}/></Smile>
        </>
    );
}
export default CampoMinado;