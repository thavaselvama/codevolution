import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
    <Greet name="chandler" heroname="wonder woman" />
    {/* <Welcome /> */}
    {/* <Hello /> */}
    {/* <Message /> */}
    {/* <Counter /> */}
    </div>
  );
}

export default App;
