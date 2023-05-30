import styled from 'styled-components';
import {useRef} from 'react';
/*
const Txt = styled.div`
    position:fixed;
    resize: none;
    bottom: 80px;
    border: 15px solid rgba(0,83,241,1);
    background-color: #faf4e4;
    padding: 10px;
`*/

const Txt = styled.textarea`
    position:fixed;
    resize: none;
    bottom: 80px;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
    background-color: #faf4e4;
    padding: 10px;
    resize: none;
`;

const SaveBtn = styled.div`
    position:fixed;
    top: 75px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`

const SearchBtn = styled.div`
    position:fixed;
    bottom: 80px;
`

function Note(color) {
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
            <Txt color={color.color} ref={ref} rows="30" cols="60" id="TITLE" placeholder="Write here."></Txt>
            <SaveBtn>
                <button onClick={() =>{guardTxt()}}>Save</button>
                <button onClick={() =>{ref.current.value =  ""}}>Clear</button>
            </SaveBtn>
            <SearchBtn><input type="file" accept='.txt' onChange={e => handleFileChosen(e.target.files[0])} /></SearchBtn>
        </>
    );
}
export default Note;