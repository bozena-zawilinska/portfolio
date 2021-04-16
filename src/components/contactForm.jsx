import React, { Component } from "react";
// import { ToastContainer, toast, Zoom } from "react-toastify";
import Input from "./common/input";
import Textarea from "./common/textarea";
import Checkbox from "./common/checkbox";
import "../sass/style.scss";

class ContactForm extends Component {
  state = {
    formDetails: {
      name: "",
      email: "",
      message: ""
    },
    disabled: true,
    errors: {}
  };

  validate = () => {
    const errors = {};

    const { formDetails } = this.state;
    if (formDetails.name.trim() === "")
      errors.name =
        "What's your name? I always like to know who I'm speaking with.";
    if (formDetails.email.trim() === "")
      errors.email = "Please enter your email address.";
    if (formDetails.message.trim() === "")
      errors.message = "Have nothing to say?";
    if (document.getElementById("checkbox").checked === false)
      errors.checkbox = "Please tick the box";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleDisabled = e => {
    e.preventDefault();
    const errors = this.validate();

    if (errors) return;
    else this.setState({ disabled: false });
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "What's your name?";
    }
    if (name === "email") {
      if (value.trim() === "") return "Please enter your email address.";
    }
    if (name === "message") {
      if (value.trim() === "") return "Have nothing to say?";
    }
    if (name === "checkbox") {
      if (document.getElementById("checkbox").checked === false)
        return "Please tick the box";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    if (errorMessage) {
      this.setState({ disabled: true });
    } else delete errors[input.name];

    const formDetails = { ...this.state.formDetails };
    formDetails[input.name] = input.value;

    this.setState({ formDetails, errors });
  };

  render() {
    const { formDetails, errors } = this.state;

    return (
      <div>
        <form
          onInputCapture={this.handleDisabled}
          action="https://formspree.io/xrgkewdy"
          method="POST"
        >
          <Input
            name="name"
            label="Name"
            value={formDetails.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
            error={errors.name}
          />
          <Input
            name="email"
            label="Email"
            value={formDetails.email}
            onChange={this.handleChange}
            placeholder="Enter your email"
            error={errors.email}
          />
          <Textarea
            name="message"
            value={formDetails.message}
            onChange={this.handleChange}
            placeholder="Enter your message"
            error={errors.message}
          />
          <Checkbox
            name="checkbox"
            onChange={this.handleChange}
            error={errors.checkbox}
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.state.disabled}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
