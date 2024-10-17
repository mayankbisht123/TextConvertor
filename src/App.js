import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import TextArea from './components/TextArea';
import ShowAlert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{
  document.title="TextConvertor";
  let [mode,setMode]=useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,varient)=>{
    setAlert({
      msg:message,
      vari:varient
  });
    setTimeout(()=>{
        setAlert(null);
    },3000);
}

  const toogleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
    }
    else{
      setMode('light');
    }

  };
return (
  <>
  <Router>
    <Nav home='Home' about='About' cont='Contacts' address="Address" email="Email" no="Phone" mode={mode} toogleMode={toogleMode}/>
    <ShowAlert alert={alert}/>
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextArea alert={showAlert} mode={mode} label="Text Convertor - Convert, Alter, Clear, Copy"/>}/>
    </Routes>
  </Router>
  </>
);
};

App.defaultProps={
  home:'Home',
  email:'E-mail'
}
export default App;
