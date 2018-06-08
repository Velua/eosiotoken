import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { toast } from 'react-toastify';


class IssueForm extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        owner: '',
        amount: '',
        symbol: '',
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
    const { code, account } = this.state;
    toast(`Checking balance: ${account}`)
    this.props.fetchBalance({ code, account });
}

render() {
    console.log(this.state);
    return (
    <form>
        <FormGroup>
            <Label for="code">Code (Smart Contract) </Label>
            <Input type="text" value={this.state.code} name="code" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
            <Label for="account">Account Name </Label>
            <Input type="text" value={this.state.account} name="account" onChange={this.onChange} />
        </FormGroup>
        <Button onClick={this.send}>Lookup</Button>
        
        {this.props.balances ? this.props.balances.length > 0 ? this.props.balances.map((balance, index) => <p key={index}>{balance}</p>) : <p>No tokens!</p> : ''}
        
    </form>
    );
}
}

export default IssueForm;
