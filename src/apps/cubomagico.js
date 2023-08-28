import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

const Visao = styled.div`
    position:fixed;
    width: 400px;
    height: 400px;
    perspective: 1000px;
    margin: 100px auto 0;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
    background-color:black;
`

const Cube = styled.div`
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;
    position: absolute;
    transform: rotateX(150deg) rotateY(140deg);
`

const Face = styled.div`
    width: 100%;
    height: 100%;
    background-size: 70px 70px;
    transform: rotateX(${p => (p.rotationX)}deg) rotateY(${p => (p.rotationY)}deg) translateZ(100px);
    background-image: url(${p => p.color[0]}), 
                      url(${p => p.color[1]}),
                      url(${p => p.color[2]}),
                      url(${p => p.color[3]}),
                      url(${p => p.color[4]}),
                      url(${p => p.color[5]}),
                      url(${p => p.color[6]}),
                      url(${p => p.color[7]}),
                      url(${p => p.color[8]});
    background-repeat: no-repeat;
    background-position: right bottom, center bottom, left bottom,
                         right, center, left,
                         right top, center top, left top;
    border: 5px solid black;
`

function CuboMagico(color){
    const [cubeFace, setFace] = useState([
        Array(9).fill('https://img.kalunga.com.br/fotosdeprodutos/479738z_1.jpg'), //vermelho
        Array(9).fill('https://th.bing.com/th/id/OIP.ornBve_k1u8UtyLbTZweZQHaHa?pid=ImgDet&rs=1'), //azul
        Array(9).fill('https://wallpaperset.com/w/full/e/7/0/35040.jpg'), //verde
        Array(9).fill('https://blindfacts.com/wp-content/uploads/2018/01/The-Color-Orange.jpg'), //laranja
        Array(9).fill('https://th.bing.com/th/id/OIP.fgc_x2wwucat0261a9EXAgHaFv?pid=ImgDet&rs=1'), // branco
        Array(9).fill('https://vitrinedoartesanato.vteximg.com.br/arquivos/ids/648773-1000-1000/Tecido-Liso-Roxo-Acai_14884_1.jpg?v=636683278175300000'), //roxo
    ]);
    return (
        <>
            <Visao color={color.color}>
                <Cube>
                    <Face rotationX={-90} rotationY={0} color={cubeFace[0]}></Face>
                </Cube>
                <Cube>
                    <Face rotationX={0} rotationY={90} color={cubeFace[1]}></Face>
                </Cube>
                <Cube>
                    <Face rotationX={0} rotationY={0} color={cubeFace[2]}></Face>
                </Cube>
                <Cube>
                    <Face rotationX={90} rotationY={0} color={cubeFace[3]}></Face>
                </Cube>
                <Cube>
                    <Face rotationX={0} rotationY={-90} color={cubeFace[4]}></Face>
                </Cube>
                <Cube>
                    <Face rotationX={0} rotationY={0} color={cubeFace[5]}></Face>
                </Cube>
            </Visao>
        </> 
    );
}
export default CuboMagico;