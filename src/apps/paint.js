import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react'

const Quadro = styled.div`
    position:fixed;
    background-color:white;
    color:black;
    border: 5px solid;
`

const PaintButtons = styled.div`
    position:fixed;
    top:90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1px;
`

let img;

function setSize(lineWidth,setLineWidth){
    if (lineWidth < 50) setLineWidth(lineWidth + 5);
    else setLineWidth(5);
}

function setColor(lineColor,setLineColor){
  switch(lineColor){
      case "black": setLineColor("green"); break;
      case "green": setLineColor("blue"); break;
      case "blue": setLineColor("red"); break;
      case "red": setLineColor("yellow"); break;
      case "yellow": setLineColor("purple"); break;
      case "purple": setLineColor("gray"); break;
      case "gray": setLineColor("brown"); break;
      default: setLineColor("black"); break;
  }
}

function clearCanvas(canvasRef){
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImg(canvasRef){
  let element = document.createElement('a');
  element.setAttribute('download', 'CanvasAsImage.png');
  const canvas = canvasRef.current;
  canvas.toBlob(function(blob) {
    let url = URL.createObjectURL(blob);
    element.setAttribute('href', url);
    element.click();
  });
}

function Paint() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = lineOpacity;
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth]);
    
    const startDrawing = (e) => {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(
        e.nativeEvent.offsetX, 
        e.nativeEvent.offsetY
      );
      setIsDrawing(true);
    };
    
    const endDrawing = () => {
      ctxRef.current.closePath();
      setIsDrawing(false);
    };
    
    const draw = (e) => {
      if (!isDrawing) {
        return;
      }
      ctxRef.current.lineTo(
        e.nativeEvent.offsetX, 
        e.nativeEvent.offsetY
      );
        
      ctxRef.current.stroke();
    };

    return (
      <>
        <PaintButtons>
            <button onClick={() => {setColor(lineColor,setLineColor)}}>{lineColor}</button>
            <button onClick={() => {setSize(lineWidth,setLineWidth)}}>{lineWidth}</button>
            <button onClick={() => {setLineColor("white")}}>Erasor</button>
            <button onClick={() => {clearCanvas(canvasRef)}}>Reset</button>
            <button onClick={() => {saveImg(canvasRef)}}>Save</button>
        </PaintButtons>
        <Quadro><canvas ref={canvasRef} onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} height="400" width="400"/></Quadro>
      </>
    );
  }
    
  export default Paint;