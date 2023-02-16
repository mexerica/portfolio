import Home from './pages/home';
import styled from 'styled-components';
import XP from "./img/windowxp.jpeg";

const AppDiv = styled.div`
  background-image: url(${XP});
  background-repeat: no-repeat;
  background-size: 2000px 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

function App() {
  return (
    <AppDiv>
        <Home/>
    </AppDiv>
  );
}

export default App;
