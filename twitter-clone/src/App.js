import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Widgets from './Widgets';
import Feed from './Feed';

function App() {
  return (
    <div className="App">

      <Sidebar />
      <Feed />
      <Widgets />

    </div>
  );
}

export default App;
