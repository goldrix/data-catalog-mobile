import React from 'react';
import image from './img/mock-up.png';
import './App.css';

function App() {
  return (
    
      
        <div className="frame">
          <img src={image} alt="Hello" className="overlapp-top"/>
          
          <iframe title="hello"  width="375" height="812" src="https://xd.adobe.com/embed/56b9b05c-10cd-49c6-5096-00f5efc322fa-2088/" frameborder="0" className="overlapp-bottom" allowfullscreen></iframe>
          
          
        </div>
        
        
    
  );
}

export default App;
