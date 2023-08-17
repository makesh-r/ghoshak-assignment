import './App.css';
import Main from './components/Main';
import GlobalContextWrapper from './context/GlobalContextWrapper';

function App() {

  return (
    <GlobalContextWrapper>
      <Main/>
    </GlobalContextWrapper>
  );
}

export default App;
