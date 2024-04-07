import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table} from 'react-bootstrap';
import "../Styles/Home.css";

const Home = (props) => {
  const navigate = useNavigate();
  const { state, dispatch } = props;

  const handleEdit = (id) => {
    navigate(`/edit-expense/${id}`);
  };
  // Delete Handler
  const handleDelete = (id) => {
    // Show confirmation alert
    const deleteExpense = state.expenses.find(expense => expense.id === id)
    const isConfirmed = window.confirm(`Are you sure you want to delete ${deleteExpense.name}?`);
    if (isConfirmed) {
      // Proceed with deletion
      dispatch({ type: 'DELETE_EXPENSE', payload: id });
    }
  };

  return (
    <div className="employeeList">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date of Expense</th>
            <th>Amount (INR)</th>
            <th>Updated At</th>
            <th>Created by</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.expenses.length > 0 ? (
            state.expenses.map(({ id, name, category, dateOfExpense, amount, updatedAt }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{dateOfExpense}</td>
                <td>{amount}</td>
                <td>{updatedAt !== undefined ? updatedAt : dateOfExpense}</td>
                <td>Unknown</td>
                <td>
                  <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(id)} className="icons">Edit</FontAwesomeIcon>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(id)} className="icons">Delete</FontAwesomeIcon>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data Available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
