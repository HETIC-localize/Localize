import "./App.css";
import logo from './logo.svg';

import { useState } from "react";
import { TranslationContext } from './context/TranslationContext'
import Translate from "./components/Translate";
import languageData from "./components/languagedata.json"
import {TraductionDataFormat} from './components/type'

const world = 'home.world'

function App() {
  const [translationData, setTranslationData] = useState<Array<TraductionDataFormat>>(languageData)
  return (
    <TranslationContext.Provider value= {{ translationData, setTranslationData}}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Translate transmittedCode={world} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </TranslationContext.Provider>
  );
}

export default App;
