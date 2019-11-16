import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

    componentDidMount() {
    axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=1ToprG2jVnh3MfA47XgyzExYf6k8bMFc"
      )
      .then(response => {
        // handle success
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log("Error Fetching and Parsing data", error);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
