import styled from 'styled-components';
import React, {useState, useRef, useEffect} from 'react';

const map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];

const Screen = styled.div`
    position:fixed;
    background-color:white;
    color:black;
    border: 15px solid rgba(0,83,241,1);
    box-sizing: border-box;
`

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function renderMinimap(posX = 0, posY = 0, scale, rays,ctx){
    const cellSize = scale * 16;
    map.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            ctx.fillStyle = "black";
            ctx.fillRect(posX + x * cellSize,posY + y * cellSize,cellSize,cellSize);
            }
        });
    });
    ctx.fillStyle = "blue";
    ctx.fillRect(posX +  player.x * scale - 5 / 2, posY +  player.y * scale - 5 / 2, 5, 5);
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo( player.x * scale,  player.y * scale);
    ctx.lineTo((player.x + Math.cos(player.angle) * 10) * scale,(player.y + Math.sin(player.angle) * 10) * scale);
    ctx.closePath();
    ctx.stroke(); 
    ctx.strokeStyle = "blue";
    rays.forEach((ray) => {
        ctx.beginPath();
        ctx.moveTo(player.x * scale, player.y * scale);
        ctx.lineTo((player.x + Math.cos(ray.angle) * ray.distance) * scale,(player.y + Math.sin(ray.angle) * ray.distance) * scale);
        ctx.closePath();
        ctx.stroke();
    }); 
}

function outOfMapBounds(x, y) {
    return x < 0 || x >= map[0].length || y < 0 || y >= map.length;
}

function getVCollision(angle) {
    const right = Math.abs(Math.floor((angle - Math.PI / 2) / Math.PI) % 2);
    const firstX = right ? Math.floor(player.x / 16) * 16 + 16 : Math.floor(player.x / 16) * 16;
    const firstY = player.y + (firstX - player.x) * Math.tan(angle);
    const xA = right ? 16 : -16;
    const yA = xA * Math.tan(angle);
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    while (!wall) {
      const cellX = right ? Math.floor(nextX / 16) : Math.floor(nextX / 16) - 1;
      const cellY = Math.floor(nextY / 16);
      if (outOfMapBounds(cellX, cellY)) break;
      wall = map[cellY][cellX];
      if (!wall) {
        nextX += xA;
        nextY += yA;
      } 
    }
    return {angle, distance: distance(player.x, player.y, nextX, nextY), vertical: true};
  }
  
  function getHCollision(angle) {
    const up = Math.abs(Math.floor(angle / Math.PI) % 2);
    const firstY = up ? Math.floor(player.y / 16) * 16 : Math.floor(player.y / 16) * 16 + 16;
    const firstX = player.x + (firstY - player.y) / Math.tan(angle);
  
    const yA = up ? -16 : 16;
    const xA = yA / Math.tan(angle);
  
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    while (!wall) {
      const cellX = Math.floor(nextX / 16);
      const cellY = up ? Math.floor(nextY / 16) - 1 : Math.floor(nextY / 16);
  
      if (outOfMapBounds(cellX, cellY))  break;
  
      wall = map[cellY][cellX];
      if (!wall) {
        nextX += xA;
        nextY += yA;
      }
    }
    return {angle, distance: distance(player.x, player.y, nextX, nextY), vertical: false};
}

function castRay(angle) {
    const vCollision = getVCollision(angle);
    const hCollision = getHCollision(angle);
    return hCollision.distance >= vCollision.distance ? vCollision : hCollision;
}

function getRays() {
    const initialAngle = player.angle - (60 * Math.PI) / 180 /2;
    const numberOfRays = 400;
    const angleStep = ((60 * Math.PI) / 180) / numberOfRays;
    return Array.from({ length: numberOfRays }, (_, i) => {
      const angle = initialAngle + i * angleStep;
      const ray = castRay(angle);
      return ray;
    });
}

function renderScene(rays, ctx) {
    rays.forEach((ray, i) => {
        const distance = ray.distance * Math.cos(ray.angle * player.angle)
        const wallHeight = ((400 * 5) / distance) * 277;
        ctx.fillStyle = ray.vertical ? "#012975" : "#013aa6";
        ctx.fillRect(i, 400 / 2 - wallHeight / 2, 1, wallHeight);
        ctx.fillStyle = "#d52b1e";
        ctx.fillRect(i,400 / 2 + wallHeight / 2,1,400 / 2 - wallHeight / 2);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(i, 0, 1, 400 / 2 - wallHeight / 2);
    });
}

function loop(doomRef){
    const canvas = doomRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpando a tela
    player.x += Math.cos(player.angle) * player.speed;
    player.y += Math.sin(player.angle) * player.speed;
    const rays = getRays();
    //renderScene(rays);
    renderMinimap(0, 0, 0.75, getRays(), ctx);
}

const player = {x: 16 * 1.5, y: 16 * 2, angle: 0 * Math.PI / 180, speed: 0};

function Doom() { 
    const doomRef = useRef(null); 

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") player.speed = 2;
        if (e.key === "ArrowDown") player.speed = -2;
    });
      
    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") player.speed = 0;
    });
      
    document.addEventListener("mousemove", function (e) {
        player.angle += e.movementX * Math.PI / 180;
    });

    useEffect(() => {setInterval(() => {loop(doomRef)}, 10)}, [player]);
    return (
        <Screen><canvas ref={doomRef} height="400" width="400"/></Screen>
    );
}

export default Doom;