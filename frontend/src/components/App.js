import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import { setToken } from '../actions/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    this.props.setToken();
  }
  render() {    
    if (!this.props.token) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <h1>Token Set!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
