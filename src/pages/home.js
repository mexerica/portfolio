import styled from 'styled-components';
import notepad from '../img/notepad.PNG';
import paint from '../img/paint.PNG';
import clock from '../img/clock.png';
import terminal from '../img/terminal.png';
import calculator from '../img/calculator.png';
import file from "../img/file.png";
import photoshop from "../img/photoshop.png";
import Note from '../apps/notepad';
import PDF from '../apps/pdf';
import Calc from '../apps/calculator';
import Clock from '../apps/clock';
import Paint from '../apps/paint';

const Bottom = styled.div`
    position:fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: blue;
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
    background-color: white;
    border: 15px solid blue;
`

const ExitBtn = styled.div`
    width: 20px;
    text-align:center;
    background-color: red;
    border: 1px solid white;
    padding: 5px 5px;
    :hover {
        background-color: white;
        color: red;
    }
`

//const date = new Date;
//var time = date.getHours() + ":" + date.getMinutes();

function Home() {
    return (
        <>
            <Bottom><Button>Start</Button></Bottom> 
            <Images>
                <img src={notepad} alt="this is notepad" width={40} height={40}/>
                <img src={paint} alt="this is paint" width={40} height={40}/>
                <img src={clock} alt="this is clock" width={40} height={40}/>
                <img src={terminal} alt="this is terminal" width={40} height={40}/>
                <img src={calculator} alt="this is terminal" width={40} height={40}/>
                <img src={file} alt="this is file" width={40} height={40}/>
                <img src={photoshop} alt="this is file" width={40} height={40}/>
            </Images>
            <Window></Window> 
            <Paint/>
        </>
    );
}
//<ExitBtn>X</ExitBtn>
export default Home;