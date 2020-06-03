import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterAction from './counteractions';
import CounterDisplay from './counterdisplay';
import TodosAdd from './todosAdd';
import TodoShow from './todoShow';
import BankBalance from './bankBalance';
import BankOperation from './bankOperations';
import Users from './users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Redux Header
      </header>
      {/* <CounterDisplay/>
      <CounterAction/> */}
      {/* <TodosAdd/>
      <TodoShow/> */}
      {/* <BankBalance/>
      <BankOperation/> */}
      <Users/>
    </div>
  );
}

export default App;
