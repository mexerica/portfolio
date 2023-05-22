import styled from 'styled-components';
import React, { useState} from 'react';
import folder from "../img/folder.png";
import gmail from "../img/gmail.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import java from "../img/java.png";
import spring from "../img/sprig.png";
import js from "../img/js.png";
import node from "../img/node.png";
import react from "../img/react.png";
import lua from "../img/lua.png";
import curriculo from "../data/curriculo.pdf";

const Folders = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
    row-gap: 0;
    bottom: 200px;
    color: black;
    font-size: 8px;
    background-color: #faf4e4;
    border: 15px solid rgba(0,83,241,1);
`

const AFolder = styled.div`
    text-align:center;
    :hover {
        background-color: lightgray;
    }
`

function Folder(){
    const [path, setPath] = useState("home");
    return (
        <Folders>
            {
                (path == "home") ?  
                    <>
                        <a href={curriculo} download>
                            <AFolder>
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Sobre</h1>
                            </AFolder>
                        </a>
                        <AFolder onClick={() => {setPath("projetos")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Projetos</h1>
                        </AFolder>
                        <AFolder onClick={() => {setPath("conhecimentos")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Conhecimentos</h1>
                        </AFolder>
                        <AFolder onClick={() => {setPath("jogos")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Jogos</h1>
                        </AFolder>
                        <AFolder onClick={() => {setPath("contatos")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Contatos</h1>
                        </AFolder>
                    </>
                : (path == "contatos") ? 
                    <>
                        <AFolder onClick={() => {setPath("home")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Voltar</h1>
                        </AFolder>
                        <AFolder>
                            <img src={gmail} alt="a folder" width={120} height={120}/>
                            <h1>tiagosilvasiqueira10@gmail.com</h1>
                        </AFolder>
                        <AFolder>
                            <a href="https://github.com/mexerica">
                                <img src={github} alt="a folder" width={120} height={120}/>
                                <h1>Github</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                        <a href="https://www.linkedin.com/in/tiago-silva-2a9394217/">
                                <img src={linkedin} alt="a folder" width={120} height={120}/>
                                <h1>Linkedin</h1>
                            </a>
                        </AFolder>
                    </>
                : (path == "conhecimentos") ? 
                    <>
                        <AFolder onClick={() => {setPath("home")}}>
                            <img src={folder} alt="a folder" width={80} height={80}/>
                            <h1>Voltar</h1>
                        </AFolder>
                        <AFolder>
                            <img src={java} alt="a folder" width={80} height={80}/>
                            <h1>Java</h1>
                        </AFolder>
                        <AFolder>
                            <img src={spring} alt="a folder" width={80} height={80}/>
                            <h1>SpringBoot</h1>
                        </AFolder>
                        <AFolder>
                            <img src={js} alt="a folder" width={80} height={80}/>
                            <h1>JavaScript</h1>
                        </AFolder>
                        <AFolder>
                            <img src={node} alt="a folder" width={80} height={80}/>
                            <h1>NodeJS</h1>
                        </AFolder>
                        <AFolder>
                            <img src={react} alt="a folder" width={80} height={80}/>
                            <h1>ReactJS</h1>
                        </AFolder>
                        <AFolder>
                            <img src={lua} alt="a folder" width={80} height={80}/>
                            <h1>LUA</h1>
                        </AFolder>
                    </>
                : (path == "jogos") ? 
                    <>
                        <AFolder onClick={() => {setPath("home")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Voltar</h1>
                        </AFolder>
                        <AFolder>
                            <a href="https://mexerica.itch.io/lemoon">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>LE:MOON</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                            <a href="https://mexerica.itch.io/nedankinde">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Nedankinde</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                            <a href="https://mexerica.itch.io/empty-world">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Empty World</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                            <a href="https://mexerica.itch.io/absurd-survival">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Absurd survival</h1>
                            </a>
                        </AFolder>
                    </>
                : 
                    <>
                        <AFolder onClick={() => {setPath("home")}}>
                            <img src={folder} alt="a folder" width={120} height={120}/>
                            <h1>Voltar</h1>
                        </AFolder>
                        <AFolder>
                            <a href="https://chip-oito.vercel.app/">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>CHIP-OITO</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                            <a href="https://github.com/mexerica/nedankinde">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Nedankinde</h1>
                            </a>
                        </AFolder>
                        <AFolder>
                            <a href="https://github.com/mexerica/Android-Studio-project">
                                <img src={folder} alt="a folder" width={120} height={120}/>
                                <h1>Android Studio</h1>
                            </a>
                        </AFolder>
                    </>
            }
        </Folders>
    );
}

export default Folder;