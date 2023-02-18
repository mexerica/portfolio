import styled from 'styled-components';
import clock from '../img/clockbase.png';
import ponteiro from '../img/ponteiro.png';
import ponteiro2 from '../img/ponteiro2.png';
import React, {useState} from 'react';

//const date = new Date;

const TicTac = styled.div`
    position:fixed;
`

function setTime(time, type){
    let newTime;
    //setInterval(function () {console.log(date)}, 1000);
    if (type == "hour"){
        if (time > 12) time -= 12;
        switch(time){
            case(12): newTime = 0; break;
            default: newTime = time * 30; break;
        }
    } else {
        newTime = time * 6;
    }
    return newTime;
}

function Clock() {
    const [date, setDate] = useState(new Date);
    setInterval(function () {setDate(new Date)}, 1000);
    
    const PointerHour = styled.div`
        position:fixed;
        transform:rotate(${setTime(date.getHours(), "hour")}deg);
    `

    const PointerMinutes = styled.div`
        position:fixed;
        transform:rotate(${setTime(date.getMinutes(), "minutes")}deg);
    `

    const PointerSeconds = styled.div`
        position:fixed;
        transform:rotate(${setTime(date.getSeconds(), "seconds")}deg);
    `
    return (
        <>
            <TicTac><img src={clock} alt="clockapp" width={480} height={480}/></TicTac>
            <PointerHour><img src={ponteiro} alt="horas" width={96} height={96} seconds={60} /></PointerHour>
            <PointerMinutes><img src={ponteiro} alt="minutos" width={96} height={96} seconds={60} /></PointerMinutes>
            <PointerSeconds><img src={ponteiro2} alt="segundos" width={96} height={96} seconds={60} /></PointerSeconds>
        </>
    );
}
export default Clock;