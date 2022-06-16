import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {
  const [url, setUrl] = useState('https://git.door43.org/test_org2/ml_tn/raw/branch/master/tn_3JN.tsv');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const _url = urlParams.get('url');
    
    console.log(_url);
    setUrl(_url);

    return () => {
      setUrl();
    };
  }, []);

  return (
    <div className="App">
      <h1>Translation Helps Print Preview App</h1>
      <Layout url={url} />
    </div>
  );
}

export default App;
