import React, { Component, Fragment } from 'react';
import FakerComponent from './Component/Faker/Faker.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="container display-flex">
          <FakerComponent />
          <FakerComponent />
        </div>
      </Fragment>
    );
  }
}

export default App;
