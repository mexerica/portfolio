import styled from 'styled-components';
import React, { useState} from 'react';

const ButtonsCalc = styled.div`
    position:fixed;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2px;
    background-color: #faf4e4;
    padding:55px;
`
const Buttons = styled.div`
    width: 5px;
    padding: 25px 40px;
    text-align:center;
    background-color: white;
    color: #0096ff;
    border: 2px solid black;
    border-radius: 24px;
    appearance: none;
    cursor: pointer;
    :hover {
        background-color: black;
    }
`

const Red = styled.div`
    color: #e32636;
`

const Border = styled.div`
    position:relative;
    font-size: 40px;
    top: -220px;
    background-color:white;
    border: 2px solid black;
    width: 450px;
    height: 45px;
    color:black;
    text-align:right;
`

let operation = "none"
let result = ""

function setValue(setX, x, y){
    let newX
    if (y == "+" || y == "-" || y == "*" || y == "/" || y == "^" || y == "%"){
        operation = y
        result = x
        newX = 0
    } else if (y == "=") {
        if (result != "" & operation != "none"){
            switch(operation){
                case "-" : newX = Number(result) - Number(x); break;
                case "*" : newX = Number(result) * Number(x); break;
                case "/" : newX = Number(result) / Number(x); break;
                case "^" : newX = Number(result) ** Number(x); break;
                case "%" : newX = (Number(x) / 100 * Number(result)).toFixed(2); break;
                default: newX = Number(result) + Number(x); break;
            }
        }
    } else{
        if (y == ".") {
            if (x.indexOf(".") !== -1) newX = x
            else newX = x + y
        }
        else if (x != "0") newX = x + y
        else newX = y
    }
    if (newX.toString().length < 52) setX(newX);
}

function Calc(color) { 
    const [x, setX] = useState("0");
    return (
        <>
            <ButtonsCalc color={color.color}>
                <Buttons onClick={() => {setValue(setX, x, "7")}}>7</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "8")}}>8</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "9")}}>9</Buttons>
                <Buttons onClick={() => {setValue(setX,x,"/")}}><Red>/</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"*")}}><Red>*</Red></Buttons>
                <Buttons onClick={() => {setValue(setX, x, "4")}}>4</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "5")}}>5</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "6")}}>6</Buttons>
                <Buttons onClick={() => {setValue(setX,x,"-")}}><Red>-</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"+")}}><Red>+</Red></Buttons>
                <Buttons onClick={() => {setValue(setX, x, "1")}}>1</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "2")}}>2</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "3")}}>3</Buttons>
                <Buttons onClick={() => {setX(0)}}><Red>AC</Red></Buttons>
                <Buttons onClick={() => {setX(Math.floor(x / 10))}}><Red>C</Red></Buttons>
                <Buttons onClick={() => {setValue(setX, x, "0")}}>0</Buttons>
                <Buttons onClick={() => {setValue(setX, x, ".")}}>,</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "3.14")}}>PI</Buttons>
                <Buttons onClick={() => {setValue(setX,x,"=")}}><Red>=</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"^")}}><Red>^</Red></Buttons>
                <Buttons onClick={() => {setX(Number(x) / 100 * Number(result)).toFixed(2)}}><Red>%</Red></Buttons>
                <Buttons onClick={() => {setX(Math.sqrt(x))}}><Red>Raiz</Red></Buttons>
                <Buttons onClick={() => {setX(-x)}}><Red>+/-</Red></Buttons>
                <Buttons onClick={() => {setX(1/x)}}><Red>1/x</Red></Buttons>
            </ButtonsCalc>
            <Border>{x}</Border>
        </>
    );
}
//
export default Calc;