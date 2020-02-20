import React from "react";
import Students from "../src/Students";
import students from "../src/users.json";
import "./App.css";

class App extends React.Component {
  state = {
    students: students,
    search: ""
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    let arr = this.state.students.filter(person => {
      if (this.state.search === "") {
        return students;
      } else if (
        person.firstName === this.state.search ||
        person.lastName === this.state.search
      ) {
        console.log(person);
        return person;
      }
    });

    return (
      <div className="App">
        <h1>Iron Students</h1>
        <form>
          <input
            id="search"
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </form>
        <Students students={arr} />
      </div>
    );
  }
}

export default App;
