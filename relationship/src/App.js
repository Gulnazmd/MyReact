
import './App.css';
import Builder from './containers/Builder/Builder';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Builder/>
      </div>
    </BrowserRouter>
  );
}

export default App;
