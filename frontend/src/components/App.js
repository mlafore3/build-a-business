import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import { setToken } from '../actions/index';


axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    this.props.setToken();
  }
  render() {
    return (
      <div>
        <p>Hell</p>
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
