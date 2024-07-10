
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import  React,{ useState } from 'react';

function App() {
  const[mode, setmode]=useState('light');

  const toggleMode =()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.background='#042743';
    }else{
      setmode('light');
      document.body.style.background='white';
    }
  }
  
  return (
    <>
    
   
        <Navbar title="textInsight"  mode={mode} toggleMode={toggleMode} />
        <div className="container my-4">
          
             
           
          
              <Textform heading="Enter the Text to Analyze" mode={mode} />
            
           
        </div>
  
     
      
    </>
  );
}

export default App;
