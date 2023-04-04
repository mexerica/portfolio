import styled from 'styled-components';
import {useRef} from 'react';
import Google from '../img/google.png'

const WebBrowser = styled.div`
    position:relative;
    border: 15px solid rgba(0,83,241,1);
`

function Internet() {
    return (
        <WebBrowser>
            <img src={Google} width={480} height={480}></img>
        </WebBrowser>
    );
}
export default Internet;