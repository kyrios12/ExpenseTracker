import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useDateFormat from '../Custom Hooks/dateFormater';
// import "../Styles/EditExpense.css";

const EditExpense = (props) => {
  const { state, dispatch, id } = props;
  const navigate = useNavigate();
  const editExpense = state.expenses.find(expense => expense.id === id);
  const [name, setName] = useState(editExpense ? editExpense.name : '');
  const [description, setDescription] = useState(editExpense ? editExpense.description : '');
  const [category, setCategory] = useState(editExpense ? editExpense.category : '');
  const [date, setDate] = useState(editExpense ? editExpense.dateOfExpense : '');
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : '');
  const formattedDateStr = useDateFormat(date);

  const handleAmount = (e) => {
    const inputAmount = e.target.value;
  
    // Check if the input is empty or a valid positive number
    if (inputAmount === '' || /^\d*\.?\d+$/.test(inputAmount)) {
      setAmount(inputAmount);
    }
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedExpense = { id: editExpense.id, name, description, category, dateOfExpense: editExpense.dateOfExpense, updatedAt: formattedDateStr === editExpense.dateOfExpense ? 'now' : formattedDateStr, amount: Number(amount) };
    const updatedExpenses = state.expenses.map(expense => (expense.id === id ? updatedExpense : expense));
    dispatch({ type: 'EDIT_EXPENSE', payload: updatedExpenses });
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setAmount('');
    navigate('/home');
  };

  const handleReset = () => {
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setAmount('');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <>
    <Button variant="secondary" onClick={handleBack} className='mt-2 ml-2'>Back</Button>
    <Container className='h-25'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Name of Expense'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Describe the Expense'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Education">Education</option>
                  <option value="Books">Books</option>
                  <option value="Others">Others</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Label>Date of Expense</Form.Label>
                <Form.Control
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Expense Amount</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Expense Amount in INR'
                  min='0'
                  value={amount}
                  onChange={handleAmount}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">Update Expense</Button>{' '}
              <Button variant="danger" onClick={handleReset} className='mt-2'>Cancel</Button>{' '}
            </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default EditExpense;
