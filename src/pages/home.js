import styled from 'styled-components';
import React, {useState} from 'react'
import notepad from '../img/notepad.PNG';
import paint from '../img/paint.PNG';
import clock from '../img/clock.png';
import terminal from '../img/terminal.png';
import calculator from '../img/calculator.png';
import photoshop from "../img/photoshop.png";
import folder from "../img/folder.png";
import tictactoe from "../img/tictactoe.png";
import Minesweeper from "../img/Minesweeper.png";
import explorer from "../img/explorer.png";
import barra from '../img/barraTarefas.png';
import config from '../img/config.png';
import doom from "../img/doom.png";
import loading from "../img/loading.gif";
import win98 from "../img/win98.png";
import Note from '../apps/notepad';
import PDF from '../apps/pdf';
import Calc from '../apps/calculator';
import Clock from '../apps/clock';
import Paint from '../apps/paint';
import Folder from '../apps/folder';
import Tictactoe from "../apps/tictactoe";
import CampoMinado from "../apps/campoMinado";
import Internet from '../apps/internet';
import Doom from '../apps/doom';
import XP from "../img/windowxp.jpeg";


const Button = styled.div`
    width: 30px;
    padding: 5px 25px;
    font-size: 14px;
    font-weight: 700;
    background-color: green;
    border: 0px;
    border-radius: 12px;
    appearance: none;
    cursor: pointer;
    :hover {
        background-color: white;
        color: green;
    }
`

const Images = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    left: 0px;
    top: 0px;
`

const BarraTarefas = styled.div`
    position:fixed;
    left:0px;
    bottom:25px;
`

const InfoTarefas = styled.div`
    position:Absolute;
    left:60px;
    bottom:315px;
    font-size: 25px;
`

const ButtonsConfig = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1px;
    border: 15px solid rgba(0,83,241,1);
    background-color: #faf4e4;
    padding:50px;
`

const Buttons = styled.div`
    padding: 25px 80px;
    text-align:center;
    font-size: 0.7em;
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

function Home() {
    const [app, setApp] = useState("folder");
    const [tarefas, setTarefas] = useState(false);
    const [background, setBackground] = useState(XP);
    const [color, setColor] = useState("#0053f1");

    function Configurations(){
        return (
            <ButtonsConfig>
                <Buttons onClick={() =>{ChangeColor()}}>Mudar cor da interface</Buttons>
                <Buttons onClick={() =>{ChangeBack()}}>Mudar background</Buttons>
            </ButtonsConfig>
        )
    }

    function ChangeBack(){
        switch(background) {
            case XP : setBackground(win98); break;
            case win98 : setBackground(loading); break;
            default : setBackground(XP); break;
        }
    }

    function ChangeColor(){
        switch(color) {
            case "#0053f1" : setColor("#00cc99"); break;
            case "#00cc99" : setColor("#d32027"); break;
            case "#d32027" : setColor("#ff97d1"); break;
            default : setColor("#0053f1"); break;
        }
    }

    const AppDiv = styled.div`
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: 2000px 700px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    `
    const Bottom = styled.div`
        position:fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 30px;
        margin-left: auto;
        margin-right: auto;
        background: rgb(0,83,241);
        background: linear-gradient(0deg, ${color} 90%, rgba(86,144,255,1) 100%);
    `
    return (
        <AppDiv>
            <Bottom><Button onClick={() => {setTarefas(!tarefas)}}>Start</Button></Bottom> 
            {
                (tarefas) ?
                    <> 
                        <BarraTarefas><img src={barra} alt="barra de tarefas" width={320} height={320}></img></BarraTarefas>
                        <InfoTarefas>User</InfoTarefas> 
                    </>
                    : <></>
            }
            {
                (app == "paint") ? <Paint/> :  
                (app == "calc") ? <Calc/> :
                (app == "clock") ? <Clock/> :  
                (app == "note") ? <Note/> :
                (app == "folder") ? <Folder/> :
                (app == "tictactoe") ? <Tictactoe/> :
                (app == "campominado") ? <CampoMinado/> :
                (app == "internet") ? <Internet/> :
                (app == "config") ? Configurations() :
                (app == "doom") ? <Doom/> :
                <PDF/>
            }
            <Images>
                <img src={notepad} onClick={() => {setApp("note")}} alt="this is notepad" width={40} height={40}/>
                <img src={paint} onClick={() => {setApp("paint")}} alt="this is paint" width={40} height={40}/>
                <img src={clock} onClick={() => {setApp("clock")}} alt="this is clock" width={40} height={40}/>
                <img src={terminal} alt="this is terminal" width={40} height={40}/>
                <img src={calculator} onClick={() => {setApp("calc")}} alt="this is terminal" width={40} height={40}/>
                <img src={photoshop} alt="this is phothoshop" width={40} height={40}/>
                <img src={folder} onClick={() => {setApp("folder")}} alt="this is folder" width={40} height={40}/>
                <img src={tictactoe} onClick={() => {setApp("tictactoe")}} alt="this is phothoshop" width={40} height={40}/>
                <img src={Minesweeper} onClick={() => {setApp("campominado")}} alt="this is Minesweeper" width={40} height={40}/>
                <img src={explorer} onClick={() => {setApp("internet")}} alt="this is edge" width={40} height={40}/>
                <img src={config} onClick={() => {setApp("config")}} alt="this is configurations" width={40} height={40}/>
                <img src={doom} onClick={() => {setApp("doom")}} alt="this is doom" width={40} height={40}/>
            </Images>
        </AppDiv>
    );
}
//<ExitBtn>X</ExitBtn>
export default Home;