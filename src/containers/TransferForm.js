import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class TransferForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      quantity: "",
      to: "",
      memo: ""
    };

    this.onChange = this.onChange.bind(this);
    this.send = this.send.bind(this);
  }

  onChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  send() {
    const { from, to, quantity, memo } = this.state;
    this.props.sendEos({ from, to, quantity, memo });
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <FormGroup>
          <Label for="from">From </Label>
          <Input type="text" value={this.state.from} name="from" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="To">To </Label>
          <Input type="text" value={this.state.to} name="to" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity </Label>
          <Input type="text" value={this.state.quantity} name="quantity" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="memo">Memo</Label>
          <Input type="text" value={this.state.memo} name="memo" onChange={this.onChange} />
        </FormGroup>
        
        
        <Button onClick={this.send}>Send</Button>
      </form>
    );
  }
}

export default TransferForm;
