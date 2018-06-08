import React, { Component } from "react";
import { Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { toast } from 'react-toastify';


class BalanceForm extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        privateKey: '',
        account: ''
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
    const { privateKey, account } = this.state;
    toast(`Loading private key: ${account}`)
    this.props.setPrivateKey(privateKey);
}

render() {
    console.log(this.state);
    return (
    <form>
    <Alert color="danger">
        Entering Private keys on websites like this is not safe, enter only testnet keys. 
    </Alert>
        <FormGroup>
            <Label for="privateKey">Private Key </Label>
            <Input type="text" value={this.state.privateKey} name="privateKey" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
            <Label for="account">Account Name </Label>
            <Input type="text" value={this.state.account} name="account" onChange={this.onChange} />
        </FormGroup>
        <Button onClick={this.send}>Set Private Key</Button>
    </form>
    );
}
}

export default BalanceForm;
