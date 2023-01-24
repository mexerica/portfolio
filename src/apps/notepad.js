import styled from 'styled-components';

let text = "a"

const Txt = styled.div`
    position:fixed;
    color:black;
    text-size: 20px;
`

function Note() {
    return (
        <Txt>{text}</Txt>
    );
}
//<ExitBtn>X</ExitBtn>
export default Note;