import React from 'react';
import './App.css';
import GraphComponent from './components/GraphComponent';
import WPComponent from './components/WPComponent';

function App() {
  return (
    <div className="App">
     <div>
      {/* including component in app js */}
         <WPComponent />
     </div>
    </div>
  );
}

export default App;
