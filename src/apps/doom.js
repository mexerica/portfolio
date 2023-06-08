import styled from 'styled-components';
import React, {useRef, useEffect, useState} from 'react';
import doomgun from "../img/doomgun.png";
import doomshooting from "../img/doomgunshooting.png";
import zilaball from "../img/wolfWall.png";

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 3, 0, 4, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 5, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

const Screen = styled.canvas`
    position:fixed;
    background-color:white;
    color:black;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
    box-sizing: border-box;
`

const BigFGun = styled.div`
    position:relative;
    justify-content:center;
    bottom: -148px;
`

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function renderMinimap(posX = 0, posY = 0, scale, rays,ctx){
    const cellSize = scale * 32;
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

function getVCollision(angle,pattern) {
    const right = Math.abs(Math.floor((angle - Math.PI / 2) / Math.PI) % 2);
    const firstX = right ? Math.floor(player.x / 32) * 32 + 32 : Math.floor(player.x / 32) * 32;
    const firstY = player.y + (firstX - player.x) * Math.tan(angle);
    const xA = right ? 32 : -32;
    const yA = xA * Math.tan(angle);
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    let color = "#013aa6";
    while (!wall) {
      const cellX = right ? Math.floor(nextX / 32) : Math.floor(nextX / 32) - 1;
      const cellY = Math.floor(nextY / 32);
      if (outOfMapBounds(cellX, cellY)) break;
      wall = map[cellY][cellX];
      if (wall == 2) color = "#6bcdb3"; 
      //else if (wall == 3) color = pattern; 
      else if (wall == 4) color = "#962e33";
      else if (wall == 5) color = "#bff412";
      if (!wall) {
        nextX += xA;
        nextY += yA;
      } 
    }
    return {angle, distance: distance(player.x, player.y, nextX, nextY), vertical: true, color};
  }
  
  function getHCollision(angle, pattern) {
    const up = Math.abs(Math.floor(angle / Math.PI) % 2);
    const firstY = up ? Math.floor(player.y / 32) * 32 : Math.floor(player.y / 32) * 32 + 32;
    const firstX = player.x + (firstY - player.y) / Math.tan(angle);
    const yA = up ? -32 : 32;
    const xA = yA / Math.tan(angle);
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    let color = "#012975";
    while (!wall) {
      const cellX = Math.floor(nextX / 32);
      const cellY = up ? Math.floor(nextY / 32) - 1 : Math.floor(nextY / 32);
      if (outOfMapBounds(cellX, cellY))  break;
      wall = map[cellY][cellX];
      if (wall == 2) color = "#00b0aa";
      //else if (wall == 3) color = pattern;
      else if (wall == 4) color = "#782428"; 
      else if (wall == 5) color = "#98c30e";
      if (!wall) {
        nextX += xA;
        nextY += yA;
      }
    }
    return {angle, distance: distance(player.x, player.y, nextX, nextY), vertical: false, color};
}

function castRay(angle, pattern) {
    const vCollision = getVCollision(angle, pattern);
    const hCollision = getHCollision(angle, pattern);
    return hCollision.distance >= vCollision.distance ? vCollision : hCollision;
}

function getRays(pattern) {
    const initialAngle = player.angle - (60 * Math.PI) / 180 /2;
    const numberOfRays = 500;
    const angleStep = ((60 * Math.PI) / 180) / numberOfRays;
    return Array.from({ length: numberOfRays }, (_, i) => {
      const angle = initialAngle + i * angleStep;
      const ray = castRay(angle, pattern);
      return ray;
    });
}

function renderScene(rays, ctx) {
    rays.forEach((ray, i) => {
        const distance = ray.distance * Math.cos(ray.angle - player.angle)
        const wallHeight = ((32 * 5) / distance) * 277; 
        ctx.fillStyle = ray.color;
        ctx.fillRect(i, 500 / 2 - wallHeight / 2, 1, wallHeight);
        ctx.fillStyle = "#d52b1e";
        ctx.fillRect(i,500/2 + wallHeight / 2,1,500/2 - wallHeight / 2);
    });
}

function loop(doomRef, img){
    const canvas = doomRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpando a tela
    const pattern = ctx.createPattern(img, "no-repeat");
    player.x += Math.cos(player.angle) * player.speed;
    if (player.x < 40 | player.x > 238) player.x -= Math.cos(player.angle) * player.speed;
    player.y += Math.sin(player.angle) * player.speed;
    if (player.y < 40 | player.y > 210) player.y -= Math.sin(player.angle) * player.speed;
    //console.log(map[player.x / 40 | 0][player.y / 40 | 0]);
    const rays = getRays(pattern);
    renderScene(rays,ctx);
    renderMinimap(0, 0, 0.75, getRays(), ctx); 
}

function shooting(setGun){
    let count = 0;
    const myInterval = setInterval(() => {
        if (count === 0) setGun(doomshooting)
        else if (count === 1) setGun(doomgun)
        else clearInterval(myInterval)
        count++;        
    }, 400) 
}

function movePlayer(){
    document.addEventListener("mousemove", function (e) {
        player.angle += e.movementX * Math.PI / 180;
    });
}

const player = {x: 32 * 1.5, y: 32 * 2, angle: 0 * Math.PI / 180, speed: 0};

function Doom(color) { 
    const doomRef = useRef(null);
    const [gun, setGun] = useState(doomgun);

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp" || e.key === "w") player.speed = 2;
        if (e.key === "ArrowDown" || e.key === "s") player.speed = -2;
        if (e.key === "ArrowRight" || e.key === "d") player.angle += 1 * Math.PI / 180; //player.y += 2;
        if (e.key === "ArrowLeft" || e.key === "a") player.angle -= 1 * Math.PI / 180; //player.y -= 2
        if (e.key === "Enter") shooting(setGun)
    });
      
    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "w" || e.key === "s") player.speed = 0;
    });

    const isMouseInBound = (e) => {
        const eleBounds = doomRef.current.getBoundingClientRect();
        if (e.clientX >= eleBounds.left && e.clientX <= eleBounds.right) console.log(true);
        else console.log(false);
    };
      
    //useEffect(() => {setInterval(() => {loop(doomRef)}, 1)}, []);
    useEffect(() => {
        const img = new Image();
        img.src = zilaball;
        img.onload = () => setInterval(() => {loop(doomRef, img)},1);
    });
    return (
        <>
            <Screen color={color.color} onClick={() =>{shooting(setGun)}} ref={doomRef} onMouseOver={() =>{movePlayer()}} height="500" width="500" ></Screen>
            <BigFGun><img src={gun} alt="arminha piu piu"/></BigFGun>
        </>
    );
}

export default Doom;