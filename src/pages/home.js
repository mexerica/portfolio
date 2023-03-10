import styled from 'styled-components';
import React, {useState} from 'react'
import notepad from '../img/notepad.PNG';
import paint from '../img/paint.PNG';
import clock from '../img/clock.png';
import terminal from '../img/terminal.png';
import calculator from '../img/calculator.png';
import file from "../img/file.png";
import photoshop from "../img/photoshop.png";
import folder from "../img/folder.png";
import tictactoe from "../img/tictactoe.png";
import Minesweeper from "../img/Minesweeper.png";
import explorer from "../img/explorer.png";
import Note from '../apps/notepad';
import PDF from '../apps/pdf';
import Calc from '../apps/calculator';
import Clock from '../apps/clock';
import Paint from '../apps/paint';
import Folder from '../apps/folder';
import Tictactoe from "../apps/tictactoe";
import CampoMinado from "../apps/campoMinado";
import Internet from '../apps/internet';

const Bottom = styled.div`
    position:fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    background: rgb(0,83,241);
    background: linear-gradient(0deg, rgba(0,83,241,1) 90%, rgba(86,144,255,1) 100%);
`

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

const Window = styled.div`
    height: 500px;
    width: 500px;
    background-color: #faf4e4;
    border: 15px solid rgba(0,83,241,1);
`

const ExitBtn = styled.div`
    position:relative;
    width: 14px;
    weight: 30px;
    text-align:center;
    top:60px;
    right: -530px;
    top: -255px;
    background-color: red;
    border: 1px solid white;
    border-top: 1px solid red;
    padding: 1px 1px;
    :hover {
        background-color: white;
        color: red;
    }
`

function Home() {
    const [app, setApp] = useState("folder");
    return (
        <>
            <Bottom><Button>Start</Button></Bottom> 
            <Images>
                <img src={notepad} onClick={() => {setApp("note")}} alt="this is notepad" width={40} height={40}/>
                <img src={paint} onClick={() => {setApp("paint")}} alt="this is paint" width={40} height={40}/>
                <img src={clock} onClick={() => {setApp("clock")}} alt="this is clock" width={40} height={40}/>
                <img src={terminal} alt="this is terminal" width={40} height={40}/>
                <img src={calculator} onClick={() => {setApp("calc")}} alt="this is terminal" width={40} height={40}/>
                <img src={file} alt="this is file" width={40} height={40}/>
                <img src={photoshop} alt="this is phothoshop" width={40} height={40}/>
                <img src={folder} onClick={() => {setApp("folder")}} alt="this is folder" width={40} height={40}/>
                <img src={tictactoe} onClick={() => {setApp("tictactoe")}} alt="this is phothoshop" width={40} height={40}/>
                <img src={Minesweeper} onClick={() => {setApp("campominado")}} alt="this is folder" width={40} height={40}/>
                <img src={explorer} onClick={() => {setApp("internet")}} alt="this is folder" width={40} height={40}/>
            </Images>
            <ExitBtn>X</ExitBtn> 
            <Window></Window>
            {
                (app == "paint") ? <Paint/> :  
                (app == "calc") ? <Calc/> :
                (app == "clock") ? <Clock/> :  
                (app == "note") ? <Note/> :
                (app == "folder") ? <Folder/> :
                (app == "tictactoe") ? <Tictactoe/> :
                (app == "campominado") ? <CampoMinado/> :
                (app == "internet") ? <Internet/> :
                <PDF/>
            }
        </>
    );
}
//<ExitBtn>X</ExitBtn>
export default Home;