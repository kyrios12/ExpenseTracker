import React, { useReducer } from 'react';
import reducer from './Reducer/homeReducer';
import { Routes, Route } from 'react-router-dom';
import data from '../src/data';
import Navbar from './Components/Navbar';
import AddExpense from './Pages/AddExpense';
import Home from './Pages/Home';
import Login from './Pages/Login';
import EditExpense from './Pages/EditExpense';
import { useParams } from 'react-router-dom'; 

function App() {
  const initialState = {
    expenses: data,
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    // Routes and Navigation
      <div className="App">
        <Navbar state={state} dispatch={dispatch} />
        <Routes>
          <Route path="/" element={<Login state={state} dispatch={dispatch} />} />
          <Route path="/home" element={<Home state={state} dispatch={dispatch} />} />
          <Route path="/add-expense" element={<AddExpense state={state} dispatch={dispatch} />} />
          <Route path="/edit-expense/:id" element={<EditExpenseWrapper state={state} dispatch={dispatch} />} /> 
        </Routes>
      </div>
  );
}

// Wrapper Component for edit expense
const EditExpenseWrapper = ({ state, dispatch }) => {
  const { id } = useParams(); 
  console.log(typeof id)
  return <EditExpense state={state} dispatch={dispatch} id={Number(id)} />;
};

export default App;
