import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumber = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Create your own EOS.TOKEN!</h1>
        <p className="lead">This is a simple dApp which allows you to issue your own eosio.token based token.</p>
        <hr className="my-2" />
        <p>This is for test-net use only as it will deploy it's own eosio.token contract.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumber;