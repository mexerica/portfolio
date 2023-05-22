import styled from 'styled-components';
import clock from '../img/clockbase.png';
import ponteiro from '../img/ponteiro.png';
import ponteiro2 from '../img/ponteiro2.png';
import ponteiro3 from '../img/ponteiro3.png';
import React, {useState} from 'react';

//const date = new Date;

const TicTac = styled.div`
    position:relative;
    width: auto;
    height: auto;
    border: 15px solid #0053f1;
`

function setTime(time){
    let newTime;
    if (time > 12) time -= 12;
    switch(time){
        case(12): newTime = 0; break;
        default: newTime = time * 30; break;
    } 
    return newTime;
}

function Clock() {
    const [date, setDate] = useState(new Date);
    setInterval(function () {setDate(new Date)}, 1000);
    
    const PointerHour = styled.div`
        position:fixed;
        transform:rotate(${setTime(date.getHours())}deg);
    `

    const PointerMinutes = styled.div`
        position:fixed;
        transform:rotate(${date.getMinutes() * 6}deg);
    `

    const PointerSeconds = styled.div`
        position:fixed;
        transform:rotate(${date.getSeconds() * 6}deg);
    `
    return (
        <>
            <TicTac><img src={clock} alt="clockapp" width={480} height={480}/></TicTac>
            <PointerHour><img src={ponteiro} alt="horas" width={96} height={96} seconds={60} /></PointerHour>
            <PointerMinutes><img src={ponteiro3} alt="minutos" width={96} height={96} seconds={60} /></PointerMinutes>
            <PointerSeconds><img src={ponteiro2} alt="segundos" width={96} height={96} seconds={60} /></PointerSeconds>
        </>
    );
}
export default Clock;