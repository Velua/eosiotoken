import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumber = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Create your own EOS.TOKEN!</h1>
        <p className="lead">This is a simple dApp which allows you to issue your own eosio.token based token.</p>
        <hr className="my-2" />
        <p>This connects to the Jungle test-net only.</p>
        <p>Chain ID: 7d47aae09c97dbc21d52c6d9f17bb70a1f1f2fda5f81b3ef18979b74b2070d8c</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumber;