import styled from 'styled-components';
import {useRef} from 'react';

const Txt = styled.div`
    position:fixed;
    color:green;
    text-size: 20px;
    resize: none;
    bottom: 80px;
`

const SaveBtn = styled.div`
    position:fixed;
    top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
`

function Note() {
    const ref = useRef("abacate");
    function guardTxt(){
        console.log(ref.current.value);
    }
    function returnTxt(){
        return ref;
    }
    return (
        <>
            <SaveBtn>
                <button onClick={() =>{guardTxt()}}>Save</button>
                <button onClick={() =>{ref.current.value =  ""}}>Clear</button>
            </SaveBtn>
            <Txt><textarea ref={ref} rows="30" cols="60" id="TITLE"></textarea></Txt>
        </>
    );
}
//<ExitBtn>X</ExitBtn>
export default Note;