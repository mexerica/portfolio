import styled from 'styled-components';
import {useRef} from 'react';
import Google from '../img/google.png'

const WebBrowser = styled.div`
    position:fixed;
`

function Internet() {
    return (
        <WebBrowser>
            <img src={Google} width={480} height={480}></img>
        </WebBrowser>
    );
}
export default Internet;