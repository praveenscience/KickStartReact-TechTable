import React, { Component } from "react";
import Header from "./Header/Header";

export default class App extends Component {
  state = {
    Dark: false
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          Tech Table
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-6 offset-6">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.Dark}
                  onChange={e => this.setState({ Dark: e.target.checked })}
                />
                Toggle
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
