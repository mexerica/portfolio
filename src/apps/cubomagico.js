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
    width: 50%;
    height: 50%;
    position: relative;
    animation: spin 10s infinite linear;
`

const Face = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(https://th.bing.com/th/id/OIP.eFN4EoYWQDmK2pm8SIo__AHaHW?pid=ImgDet&rs=1);
    background-size: 50px;
    transform: rotateX(${p => (p.rotationX)}deg) rotateY(${p => (p.rotationY)}deg) translateZ(100px);

    @keyframes spin {
        from {
          transform: rotateX(0deg) rotateY(0deg);
        }
        to {
          transform: rotateX(360deg) rotateY(360deg);
        }
    }
`

function cuboMagico(color){
    return (
        <Visao color={color.color}>
            <Cube>
                <Face rotationX={90} rotationY={0}></Face>
                <Face rotationX={-90} rotationY={0}></Face>
                <Face rotationX={0} rotationY={90}></Face>
                <Face rotationX={0} rotationY={-90}></Face>
                <Face rotationX={0} rotationY={0}></Face>
                <Face rotationX={-180} rotationY={0}></Face>
            </Cube>
        </Visao>
    );
}
export default cuboMagico;