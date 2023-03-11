import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const ButtonsCalc = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
    bottom: 75px;
`
const Buttons = styled.div`
    width: 30px;
    padding: 25px 50px;
    text-align:center;
    font-size: 14px;
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
    position:fixed;
    top: 77px;
    background-color:white;
    border: 2px solid black;
    width: 450px;
    height: 45px;
`

const Result = styled.div`
    position:fixed;
    color:black;
    top: 75px;
    font-size: 40px;
}
`

let operation = "none"
let result = ""
let hascomma = false

function setValue(setX, x, y){
    let newX
    if (y == "+" || y == "-" || y == "*" || y == "/"){
        operation = y
        result = x
        newX = 0
    } else if (y == "=") {
        if (result != "" & operation != "none"){
            switch(operation){
                case "-" : newX = Number(result) - Number(x); break;
                case "*" : newX = Number(result) * Number(x); break;
                case "/" : newX = Number(result) / Number(x); break;
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
    if (newX < 99999999999999999) setX(newX);
}

function Calc() { 
    const [x, setX] = useState("0");
    return (
        <>
            <Border></Border>
            <Result>{x}</Result>
            <ButtonsCalc>
                <Buttons onClick={() => {setValue(setX, x, "7")}}>7</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "8")}}>8</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "9")}}>9</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "4")}}>4</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "5")}}>5</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "6")}}>6</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "1")}}>1</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "2")}}>2</Buttons>
                <Buttons onClick={() => {setValue(setX, x, "3")}}>3</Buttons>        
                <Buttons onClick={() => {setValue(setX, x, "0")}}>0</Buttons>
                <Buttons onClick={() => {setValue(setX, x, ".")}}>,</Buttons>
                <Buttons onClick={() => {setX(0)}}><Red>AC</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"+")}}><Red>+</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"-")}}><Red>-</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"*")}}><Red>*</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"/")}}><Red>/</Red></Buttons>
                <Buttons onClick={() => {setValue(setX,x,"=")}}><Red>=</Red></Buttons>
        </ButtonsCalc>
        </>
    );
}
//<ExitBtn>X</ExitBtn>
export default Calc;