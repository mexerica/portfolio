import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react'

const Quadro = styled.div`
    position:fixed;
    color:black;
`

function Painting(canvasRef, canvasX, canvasY){
    const draw = ctx => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(canvasX, canvasY, 20, 0, 2*Math.PI)
        ctx.fill()
    }
      
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
    }, [draw])
}



const Paint = props => {
    const canvasRef = useRef(null)
    const [canvasX, setCanvasX] = useState(20);
    const [canvasY, setCanvasY] = useState(20);
    //const canvasX = useRef(20)
    //const canvasY = useRef(20)
    document.addEventListener('keyup', function(event) {
        switch(event.key){
            case "ArrowRight": setCanvasX(canvasX + 5); break;
            case "ArrowLeft": setCanvasX(canvasX - 5); break;
            case "ArrowUp": setCanvasY(canvasY - 5); break;
            case "ArrowDown": setCanvasY(canvasY + 5); break;
            default : break;
        }
    });
    setInterval(Painting(canvasRef, canvasX, canvasY), 2000);
    return <Quadro><canvas ref={canvasRef} {...props}/></Quadro>
}

export default Paint