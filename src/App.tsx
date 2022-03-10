import "./App.css";

import { useState } from "react";
import { TranslationContext } from './context/TranslationContext'
import Translate from "./components/Translate";
import languageData from "./components/languagedata.json"
import {TraductionDataFormat} from './components/type'

const test = 'home.statut'

function App() {
  const [translationData, setTranslationData] = useState<Array<TraductionDataFormat>>(languageData)
  return (
    <TranslationContext.Provider value= {{ translationData, setTranslationData}}>
      <Translate transmittedCode={test} />
    </TranslationContext.Provider>
  );
}

export default App;
