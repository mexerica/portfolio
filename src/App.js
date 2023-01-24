import Home from './pages/home';
import styled from 'styled-components';

const AppDiv = styled.div`
  height: 100vh;
  background: black;
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
