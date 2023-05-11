import styled from 'styled-components';

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

function Configurations() {
    return (
        <Buttons>Mudar cor da interface</Buttons>
    );
}

export default Configurations;