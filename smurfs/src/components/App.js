import React, { Component } from "react";
import { connect } from 'react-redux';
import SmurfForm from './Form.js'
import SmurfList from './SmurfList.js'
import "./App.css";
class App extends Component {

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm/>
        <h2>List Of Smurfs:</h2>
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
    
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)
