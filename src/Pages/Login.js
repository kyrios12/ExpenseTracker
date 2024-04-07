import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSkip = () => {
        navigate(`/home/`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation logic
        if (!formData.email.trim()) {
            setErrors({ email: "Email is required" });
            return;
        }
        if (!formData.password.trim()) {
            setErrors({ password: "Password is required" });
            return;
        }
        console.log('Form submitted:', formData);
        // Reset form and errors
        navigate(`/home/`);
        setFormData({ email: "", password: "" });
        setErrors({});
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6}>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={errors.email && "is-invalid"}
                            />
                            {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={errors.password && "is-invalid"}
                            />
                            {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                        </Form.Group>

                        <Button variant="primary" type="submit" block>Login</Button>

                        <Form.Text className="text-muted mt-2" onClick={handleSkip} cursor = "pointer">Skip?</Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;