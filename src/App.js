import React from 'react';
import './App.scss';

//component
import AppBar from './components/AppBar/AppBar';
import BoardBar from './components/BoardBar/BoardBar';
import BoardContent from './components/BoardContent/BoardContent'

function App() {
  return (
    <div className="Trelo">
      <AppBar/>
      <BoardBar/>
      <div className="board-columns">
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
        <BoardContent/>
      </div>

    </div>
  );
}

export default App;
