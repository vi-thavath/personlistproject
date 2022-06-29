import React, { Component } from "react";
import "./App.css";
import Proptypes from "prop-types";

const Person = ({ img, name, age, info }) => {
  return (
    <div>
      <img src={img} alt="person" />
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h4>info:{info}</h4>
    </div>
  );
};

Person.propTypes = {
  img: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  age: Proptypes.number.isRequired,
  info: Proptypes.string.isRequired,
};

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
  name: "john Cho",
  age: 69,
  info: "there is no info available",
};

class ControlledInput extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.toUpperCase();

    this.setState({
      text: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.text);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: "3rem" }}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          name="firstname"
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

class UncontrolledInput extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.firstname.value);
    console.log(this.email.value);
    console.log(this.text.textContent);
  };
  render() {
    return (
      <form style={{ margin: "3rem" }}>
        <input
          type="text"
          name="firstname"
          ref={(orange) => (this.firstname = orange)}
        />
        <input
          type="email"
          name="email"
          ref={(input) => (this.email = input)}
        />
        <button type="submit" onClick={this.handleSubmit}>
          submit here
        </button>
        <p ref={(input) => (this.text = input)}>hello world</p>
      </form>
    );
  }
}

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
        name: "john",
        age: 25,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        name: "Brian",
        age: 43,
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
        name: "Bill",
        age: 42,
        info: `i'm okay`,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.people.map((person) => {
          return (
            <div>
              <Person
                key={person.id}
                img={person.img}
                name={person.name}
                age={person.age}
                info={person.info}
              />
            </div>
          );
        })}
        <ControlledInput />
        <UncontrolledInput />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <PersonList />;
  }
}

export default App;
