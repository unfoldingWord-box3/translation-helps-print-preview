import './App.css';
import Layout from './components/Layout';
import { PermalinksHandler } from './components/PermalinksHandler';

function App() {
  return (
    <PermalinksHandler>
      <div className="App">
        <h1>Translation Helps Print Preview App</h1>
        <Layout/>
      </div>
    </PermalinksHandler>
  );
}

export default App;
