import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from './actions';

const mapStateToProps = state => {
  //the search field we'll return, which will be added to 
  //the props of the
  //app component
  //console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  //onRequestRobots: () => requestRobots(dispatch)
  onRequestRobots: () => dispatch(requestRobots())
})

class App extends Component {

  componentDidMount() {
    //console.log(this.props.store)
    //console.log(this.props.store.getState())
    //console.log(this.props)
    this.props.onRequestRobots()
  }

  /*onSearchChange (event) {
    this.setState({ searchfield: event.target.value })
  }*/

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={/*this.onSearchChange*/onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);