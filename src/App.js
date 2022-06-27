import React from "react";
// import "./App.css";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      job: "developer",
      name: "john",
    },
    {
      img: 32,
      job: "designer",
      name: "jose",
    },
    {
      img: 52,
      job: "engineer",
      name: "Jean",
    },
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat
        dolorem aut similique laborum.
      </Person>

      <Person person={people[2]} />
    </section>
  );
};
//gg this week
const Person = (props) => {
  const { img, job, name } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
