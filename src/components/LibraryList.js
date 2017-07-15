import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
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
