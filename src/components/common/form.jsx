import React, { Component } from "react";
import Joi from "joi-browser";
import InputForm from "./inputForm";
import SelectForm from "./selectForm";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validateInput = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateInput();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderFormInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <InputForm
        name={name}
        value={data[name]}
        type={type}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <SelectForm
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSubmitButton = (label) => {
    return (
      <button disabled={this.validateInput()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
