import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    //if anything errors out
    //this lifecycle hook gets run
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Oops that's not good</h1>
      )
    }
    console.log(this.props)
    return this.props.children
  }
}

export default ErrorBoundry;