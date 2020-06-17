import React, { Component, Fragment } from 'react';
import faker from 'faker/locale/en_IND';
class FakerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: faker.image.avatar(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      city: faker.address.city(),
      country: faker.address.country(),
    };
  }
  render() {
    return (
      <Fragment>
        <section id="studentBlock">
          <h1>Faker component</h1>
          <div className="card">
            <img src={this.state.photo} alt="test" />
          </div>

          <div className="card-body">
            <div className="card-title">
              {this.state.firstname} {this.state.lastname}
            </div>
          </div>

          <p>{this.state.email}</p>
          <p>{this.state.phoneNumber}</p>
          <p>{this.state.city}</p>
          <p>{this.state.country}</p>
        </section>
      </Fragment>
    );
  }
}

export default FakerComponent;
