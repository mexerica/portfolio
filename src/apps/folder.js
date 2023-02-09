import styled from 'styled-components';
import folder from "../img/folder.png";

const Folders = styled.div`
    position:fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
    bottom: 75px;
`

function Folder(){
    return (
        <Folders>
            <img src={folder} alt="a folder" width={80} height={80}/>
            <img src={folder} alt="a folder" width={80} height={80}/>
            <img src={folder} alt="a folder" width={80} height={80}/>
        </Folders>
    );
}
export default Folder;