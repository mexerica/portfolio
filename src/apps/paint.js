import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react'

const Quadro = styled.canvas`
    position:fixed;
    background-color:white;
    color:black;
    border: 5px solid;
`

const PaintButtons = styled.div`
    position:fixed;
    top:90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1px;
`

const Window = styled.div`
    height: 500px;
    width: 500px;
    background-color: #faf4e4;
    border: 15px solid rgba(0,83,241,1);
`

function setSize(lineWidth,setLineWidth){
    if (lineWidth < 50) setLineWidth(lineWidth + 5);
    else setLineWidth(5);
}

function setOpacity(lineOpacity,setLineOpacity){ 
  if (lineOpacity > 0.01) setLineOpacity(lineOpacity / 10);
  else setLineOpacity(1);
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
      case "brown": setLineColor("pink"); break;
      case "pink": setLineColor("lightblue"); break;  
      default: setLineColor("black"); break;
  }
}

function clearCanvas(canvasRef){
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function invertCanvas(canvasRef){
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      for (let j = 0; j < 3; j++) data[i + j] = 255 - data[i + j]; 
    }
    ctx.putImageData(imageData, 0, 0);
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

function paintBucket(canvasRef, lineColor){
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  //const dataURL = canvas.toDataURL("image/png");
  ctx.fillStyle = lineColor;
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  //ctx.drawImage(dataURL, 0, 0);
}

function Paint() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(1);
    
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
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
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
        <Window></Window>
        <PaintButtons>
            <button onClick={() => {setColor(lineColor,setLineColor)}}>{lineColor}</button>
            <button onClick={() => {setSize(lineWidth,setLineWidth)}}>{lineWidth}</button>
            <button onClick={() => {setOpacity(lineOpacity, setLineOpacity)}}>{lineOpacity}</button>
            <button onClick={() => {paintBucket(canvasRef, lineColor)}}>Bucket</button>
            <button onClick={() => {setLineColor("white")}}>Erasor</button>
            <button onClick={() => {clearCanvas(canvasRef)}}>Reset</button>
            <button onClick={() => {invertCanvas(canvasRef)}}>Invert</button>
            <button onClick={() => {saveImg(canvasRef, setLineOpacity)}}>Save</button>
        </PaintButtons>
       <Quadro ref={canvasRef} onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} height="400" width="400"></Quadro>
      </>
    );
  }
    
  export default Paint;