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
    background-size: 50px;
    transform: rotateX(${p => (p.rotationX)}deg) rotateY(${p => (p.rotationY)}deg) translateZ(100px);
    background-color:${p => p.color};
`

function CuboMagico(color){
    const [cubeFace, setFace] = useState([
        'red','blue', 'yellow', 
        'white','green','orange'

    ]);
    return (
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
        </Visao>
    );
}
export default CuboMagico;