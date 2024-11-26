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
import XP from "../img/windowxp.jpeg";
import Icon from "../img/XPicon.png";
import cubo from "../img/cuboMagico.png";
import chessIcon from "../img/chess.png";
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
import Chess from '../apps/chess';
import Magico from '../apps/cubomagico';

const Button = styled.div`
    width: 30px;
    font-size: 18px;
    font-weight: 700;
    padding: 5px 25px;
    font-family: Arial, Verdana;   
    background: green url(http://www.rw-designer.com/icon-view/18835.png);
    background-size: 20px 20px;
    background-position: 6px 5px;
    background-repeat: no-repeat;
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

const ImagesTarefas = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    left: 0px;
    top: 300px;
`

const Options = styled.div`
    display:flex;
    color: black;
    border-bottom: ${p => (p.border)};
    &:hover {background-color: #88bee7;}
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
    :hover {background-color: black;}
`

const AppDiv = styled.div`
    background-image: url(${p => (p.background)});
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
    background: linear-gradient(0deg, hsl(${p => (p.color)}, 100%, 47%) 85%, hsl(${p => (p.color)}, 100%, 67%) 100%);
`

const ButtonsConfig = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1px;
    background-color: #faf4e4;
    padding:50px;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
`

const Img = styled.img`
    &:hover {background-color: #88bee7;}
`

const Input = styled.input`
    border: 2px solid black;
    border-radius: 24px;
    color: #0096ff;
`

function Home() {
    const [app, setApp] = useState("folder");
    const [tarefas, setTarefas] = useState(false);
    const [background, setBackground] = useState(XP);
    const [color, setColor] = useState(219); //#0053f1
    const [name, setName] = useState("User")

    function Configurations(){
        return (
            <ButtonsConfig color={color}>
                <Buttons onClick={() =>{ChangeColor()}}>Mudar cor da interface</Buttons>
                <Buttons onClick={() =>{ChangeBack()}}>Mudar background</Buttons>
                <Input type="text" name="name" placeholder="Mude seu nome" maxlength="18" onChange={(event) => setName(event.target.value)}></Input>
            </ButtonsConfig>
        )
    }

    function ChangeBack(){
        switch(background) {
            case XP : setBackground(win98); break;
            case win98 : setBackground(loading); break;
            case win98 : setBackground(Icon); break;
            default : setBackground(XP); break;
        }
    }

    function ChangeColor(){
        switch(color) {
            case 349 : setColor(9); break;
            default : setColor(color + 20); break;
        }
    }

    function BarradeTarefas(){
        return (
            <>
                <BarraTarefas><img src={barra} alt="barra de tarefas" width={320} height={320}></img></BarraTarefas>
                <InfoTarefas>{name}</InfoTarefas>
                <ImagesTarefas>
                    <Options onClick={() => {setApp("note")}} border="1px solid #d5d5d5" >
                        <img src={notepad} alt="this is notepad" width={50} height={50}/>
                        <p>Notepad</p>
                    </Options>
                    <Options onClick={() => {setApp("folder")}} border="none" >
                    <img src={folder} alt="this is folder" width={50} height={50}/>
                    <p>Files</p>
                    </Options>
                    <Options onClick={() => {setApp("paint")}} border="none">
                        <img src={paint} alt="this is paint" width={50} height={50}/>
                        <p>Paint</p>
                    </Options>
                    <Options onClick={() => {setApp("config")}} border="1px solid #7caacd">
                        <img src={config} alt="this is configurations" width={50} height={50}/>
                        <p>Config</p>
                    </Options>
                    <Options onClick={() => {setApp("doom")}} border="none">
                        <img src={doom} alt="this is doom" width={50} height={50}/>
                        <p>Not Doom</p>
                    </Options>
                    <Options onClick={() => {setApp("clock")}} border="1px solid #7caacd">
                        <img src={clock} alt="this is clock" width={50} height={50}/>
                        <p>Clock</p>
                    </Options>
                    <Options onClick={() => {setApp("campominado")}} border="none">
                        <img src={Minesweeper} alt="this is Minesweeper" width={50} height={50}/>
                        <p>Minesweeper</p>
                    </Options>
                    <Options onClick={() => {setApp("tictactoe")}} border="none">
                        <img src={tictactoe} alt="this is phothoshop" width={50} height={50}/>
                        <p>Tictactoe</p>
                    </Options>
                    <br />
                    
                </ImagesTarefas>
            </>
        )
    }

    return (
        <AppDiv background={background}>
            <Bottom color={color}>
                <Button onClick={() => {setTarefas(!tarefas)}} background={Icon}>Start</Button>
            </Bottom> 
            {
                (tarefas) ? BarradeTarefas() : <></>
            }
            {
                (app == "paint") ? <Paint color={color}/> :  
                (app == "calc") ? <Calc color={color}/> :
                (app == "clock") ? <Clock color={color}/> :  
                (app == "note") ? <Note color={color}/> :
                (app == "folder") ? <Folder color={color}/> :
                (app == "tictactoe") ? <Tictactoe color={color}/> :
                (app == "campominado") ? <CampoMinado color={color}/> :
                (app == "internet") ? <Internet color={color}/> :
                (app == "config") ? Configurations() :
                (app == "doom") ? <Doom color={color}/> :
                <Chess color={color}/> 
                //<Magico color={color}/>
            }
            <Images>
                <Img src={notepad} onClick={() => {setApp("note")}} alt="this is notepad" width={40} height={40}/>
                <Img src={paint} onClick={() => {setApp("paint")}} alt="this is paint" width={40} height={40}/>
                <Img src={clock} onClick={() => {setApp("clock")}} alt="this is clock" width={40} height={40}/>
                <Img src={terminal} alt="this is terminal" width={40} height={40}/>
                <Img src={calculator} onClick={() => {setApp("calc")}} alt="this is terminal" width={40} height={40}/>
                <Img src={photoshop} alt="this is phothoshop" width={40} height={40}/>
                <Img src={folder} onClick={() => {setApp("folder")}} alt="this is folder" width={40} height={40}/>
                <Img src={tictactoe} onClick={() => {setApp("tictactoe")}} alt="this is phothoshop" width={40} height={40}/>
                <Img src={Minesweeper} onClick={() => {setApp("campominado")}} alt="this is Minesweeper" width={40} height={40}/>
                <Img src={explorer} onClick={() => {setApp("internet")}} alt="this is edge" width={40} height={40}/>
                <Img src={config} onClick={() => {setApp("config")}} alt="this is configurations" width={40} height={40}/>
                <Img src={doom} onClick={() => {setApp("doom")}} alt="this is doom" width={40} height={40}/>
                <Img src={chessIcon} onClick={() => {setApp("chess")}} alt="this is chess" width={40} height={40}/>
                <Img src={cubo} onClick={() => {setApp("cubo")}} alt="this is rubik's cube" width={40} height={40}/>
            </Images>
        </AppDiv>
    );
}

export default Home;