import "./App.css";

import Message from "./components/Message";
import languageData from "./components/languagedata.json"

const test = 'home.statut'

function App() {
  return <Message transmittedCode={test} transmittedData={languageData}/>;
}

export default App;
