import styled from 'styled-components';
import {useRef} from 'react';

const Txt = styled.div`
    position:fixed;
    resize: none;
    bottom: 80px;
    border: 15px solid rgba(0,83,241,1);
    background-color: #faf4e4;
    padding: 10px;
`

const SaveBtn = styled.div`
    position:fixed;
    top: 80px;
    display: grid;
    grid-template-columns: 0.1fr 0.1fr 1fr;
    grid-gap: 1px;
`

function Note() {
    const ref = useRef("abacate");
    function guardTxt(){
        const element = document.createElement("a");
        const file = new Blob([ref.current.value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
      
    const handleFileChosen = (file) => {
        const reader = new FileReader();
        reader.onloadend = (e) => ref.current.value = e.target.result
        reader.readAsText(file);
    };

    return (
        <>
            <Txt><textarea ref={ref} rows="30" cols="60" id="TITLE" placeholder="Write here."></textarea></Txt>
            <SaveBtn>
                <button onClick={() =>{guardTxt()}}>Save</button>
                <button onClick={() =>{ref.current.value =  ""}}>Clear</button>
                <input type="file" accept='.txt' onChange={e => handleFileChosen(e.target.files[0])} />
            </SaveBtn>
        </>
    );
}
export default Note;