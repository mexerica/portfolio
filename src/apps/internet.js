import styled from 'styled-components';
import {useRef,useState} from 'react';

const WebBrowser = styled.iframe`
    position:relative;
    border: 15px solid hsl(${p => (p.color)}, 100%, 47%);
`

const SearchBar = styled.div`
    position:fixed;
    text-aling:center;
    top:65px;
    display: grid;
    grid-template-columns: 3fr 1fr;
`

function changeWebSite(ref, setSite){
    let newUrl = ref.current.value
    if (!(newUrl.includes("https://www.") | newUrl.includes("http://www.")) & !newUrl.includes(".com/")) ref.current.value = "Url inválida"
    else setSite(newUrl)
}

function Internet(color) {
    const ref = useRef("https://wikipedia.com/");
    const [site, setSite] = useState(ref.current);
    return (
        <>
            <WebBrowser color={color.color} iframe src={site} height="500" width="750"></WebBrowser>
            <SearchBar>
                <input type='text' ref={ref}></input>
                <button onClick={() =>{changeWebSite(ref, setSite)}}>Search</button>
            </SearchBar>
        </>
        
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