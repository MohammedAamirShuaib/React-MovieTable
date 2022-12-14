import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
    state = {
        data: {email: '', password: '' , name: ''},
        errors: {},
    }

    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(8).required().label('Password'),
        name: Joi.string().required().label('Name')
    }
    
    doSubmit = e => {
        console.log('Submitted')
    }

    render() { 
        return (
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderFormInput("email","Email")}
                {this.renderFormInput("password","Password", 'password')}
                {this.renderFormInput("name","Name")}
                {this.renderSubmitButton('Register')}
            </form>
        </div>
        );
    }
}
 
export default RegisterForm;