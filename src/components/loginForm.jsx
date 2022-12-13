import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {},
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    
    doSubmit = e => {
        console.log('Submitted')
    }

    render() { 
        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderFormInput("username","Username")}
                {this.renderFormInput("password","Password", 'password')}
                {this.renderSubmitButton('Login')}
            </form>
        </div>
        );
    }
}
 
export default LoginForm;