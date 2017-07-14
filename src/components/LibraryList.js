import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return (

    )
  }
}

/**
 * connect is the glue between redux and react for state data excahnge
 * when connect is called it returns a function, then we call that returned function with LibraryList as parameter
 */
export default connect()(LibraryList);
