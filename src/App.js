// import logo from "./logo.svg";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  //creating the state object by calling the Constructor
  constructor() {
    super();
    this.state = {
      monster: [],
      //creating a field to store the searched string
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  render() {
    //destructuring the state to implement search filtering
    const { monster, searchField } = this.state;
    //this array contains all the monster objects which are filtered using the searchField
    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) =>
            this.setState(
              { searchField: e.target.value } //() =>
              //console.log(this.state) // if we immediately wanna know the state as we set it , we have to pass a second arg like this coz setState is async so it'll be one index behind if we log the state after setState is called
            )
          }
          //passing our monster object as props to the card list comp
        />
        <CardList monster={/*this.state.monster*/ filteredMonsters} />
      </div>
    );
  }
}
export default App;
