import styled from 'styled-components';
import loading from "../img/loading.gif";
import win98 from "../img/win98.png";

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

function Configurations(background, setBackground) {
    return (
        <ButtonsConfig>
            <Buttons>Mudar cor da interface</Buttons>
            <Buttons onClick={() =>{setBackground(win98)}}>Mudar background</Buttons>
        </ButtonsConfig>
    );
}

export default Configurations;