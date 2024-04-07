import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../Styles/Navbar.css";
import Filter from './Filter';
import Search from './Search';

const Navbar = (props) => {
    const { state, dispatch } = props;
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleAdd = () => {
        navigate('/add-expense');
        setExpanded(false); // Collapse the navbar on mobile after clicking 'Add Expense'
    }

    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg">
            <BootstrapNavbar.Brand>My Expense Tracker</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <Filter state={state} dispatch={dispatch}/>
                    <Search state={state} dispatch={dispatch}/>
                </Nav>
                <Button variant="success" onClick={handleAdd} className='ml-5'>Add Expense</Button>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
