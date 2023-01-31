import styled from 'styled-components';

const Txt = styled.div`
    position:fixed;
    color:green;
    text-size: 20px;
    resize: none;
    bottom: 80px;
`

function PDF() {
    
    return (
        <Txt><textarea rows="30" cols="60" id="TITLE" readonly="true"></textarea></Txt>
    );
}

export default PDF;