import React from 'react';
import './App.css';
import BottomNav from './UI/BottomNav/BottomNav';
import NavBar from './UI/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Welcome to FeedHub!</p>
      <BottomNav />
    </div>
  );
}

export default App;
