import React from 'react';
import './App.css';
import AddTask from './components/AddTask';





const App:React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <AddTask/>
    </div>
  );
}

export default App;
