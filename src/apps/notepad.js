import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Txt = styled.div`
    position:fixed;
    color:black;
    text-size: 20px;
    resize: none;
`

let a = 1

function Note() { /*
    const [text, setText] = useState("");
    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            //if (event.key == "Backspace") {
                //setText(text.slice(0, -1))
            //} else {
                setText(event.key + a)
                a++
            //}
        }, []);
    });
    return (
        <Txt>{text}</Txt>
    ); */
    return (
        <>
            <Txt><textarea rows="30" cols="65" id="TITLE"></textarea></Txt>
        </>
    );
}
//<ExitBtn>X</ExitBtn>
export default Note;