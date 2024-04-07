import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import "../Styles/AddExpense.css";
import useDateFormat from '../Custom Hooks/dateFormater';

const AddExpense = (props) => {
  const { state, dispatch } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const formattedDateStr = useDateFormat(date);

  // Form data handler
  const handleSubmit = (event) => {
    event.preventDefault();
    let newArr = state.expenses;
    let id = newArr.length + 1;
    let newObj = { id, name, description, category, dateOfExpense: formattedDateStr, amount: Number(amount) }

    dispatch({ type: 'ADD_EXPENSE', payload: newObj });
    console.log('Form submitted:', { name, description, category, date, amount });
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setAmount('');
    navigate('/home');
  };
 
  // Data reset handler
  const handleReset = () => {
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setAmount('');
  }

  const handleBack = () => {
    navigate('/home');
  }

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
  
    // Check if the input is a valid positive number
    if (inputAmount ==='' ||/^\d*\.?\d+$/.test(inputAmount)) {
      setAmount(inputAmount);
    }
  };

  return (
    <>
    <Button variant="secondary" onClick={handleBack} className='mt-2 ml-2'>Back</Button>
    <Container className='h-25'>
      <Row className='expenseContainer'>
        <Col>
          <h2>Create New Expense</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Name of Expense'
                maxLength= '140'
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
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='w-10'>Create Expense</Button>
            <Button variant="danger" onClick={handleReset} className='mt-1'>Cancel</Button>{' '}
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AddExpense;
