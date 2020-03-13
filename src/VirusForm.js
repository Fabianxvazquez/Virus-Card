import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class VirusForm extends Component {
  state = {
    name: "",
    description: "",
    showBack: false
  };
  handleSubmit = e => {
    let { edit, editing, toggleEdit, reset, newVirus, toggleMenu, viruses, currentVirus, name, description } = this.props
    e.preventDefault();
    if (editing){
      edit({ id: viruses[currentVirus].id, name, description})
      toggleEdit();
    } else {
      newVirus(name, description)
      toggleMenu();
      reset();
    }
    this.props.addVirus(this.state);
    this.setState({
      name: "",
      description: "",
      showBack: false
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            label="name"
            name="name"
            placeholder="virus name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            required
            label="description"
            name="description"
            placeholder="Virus info"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
