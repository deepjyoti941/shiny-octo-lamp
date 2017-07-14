import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

/**
 * [mapStateToProps take global state object inside redux store and provide them as props to LibraryList]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

/**
 * connect is the glue between redux and react for state data excahnge
 * when connect is called it returns a function, then we call that returned function with LibraryList as parameter
 */
export default connect(mapStateToProps)(LibraryList);
