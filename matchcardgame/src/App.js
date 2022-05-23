import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';

function App() {
  localStorage.setItem('match','');

  return (
    <>
      <Container/>
    </>
  );
}

export default App;
