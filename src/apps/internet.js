import styled from 'styled-components';
import {useRef} from 'react';
import Google from '../img/google.png'

const WebBrowser = styled.div`
    position:relative;
    border: 15px solid rgba(0,83,241,1);
`
function Internet() {
    const ref = useRef();
    return (
        <WebBrowser>
            <iframe src="https://wikipedia.com/" height="500" width="750" sandbox='allow-scripts allow-modal'></iframe>
        </WebBrowser>
    );
}
export default Internet;
/*
const SearchBtn = styled.div`
    position:fixed;
    bottom: 280px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1px;
`

const SearchBar = styled.div`
    position:fixed;
    text-aling:center;
`

const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" , "z"]

function createWord(ref){
    let newWord = "" 
    while(newWord.length < 5) newWord += Alphabet[Math.floor(Math.random() * 25)]
    console.log(newWord)
    ref.current.value = newWord 
}
<> 
        <WebBrowser><img src={Google} width={480} height={480}></img></WebBrowser>
        <SearchBar><input type='text' ref={ref}></input></SearchBar>
        <SearchBtn>
            <button onClick={() => {window.open("https://www.google.com.br/search?q=" + ref.current.value, "_blank")}}>Pesquisa Google</button>
            <button onClick={() => {createWord(ref)}}>Estou com sorte</button>
        </SearchBtn>
    </>
*/