import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

const lista = ['uma', 'dois', '3'];

function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            lista.map(item => {
              return (<li> {item}</li>)
            })
          }
        </ul>
        <Header />
        <Content />
      </header>
    </div>
  );
}

export default App;
