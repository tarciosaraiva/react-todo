'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View
} = React;

var TaskScreenCell = React.createClass({
    render: function () {
      return (
        <View style={styles.taskContainer}>
          <Text style={styles.taskItem}>{this.props.task}</Text>
        </View>
      );
    }
});

var styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    height: 40,
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  taskItem: {
    fontSize: 16,
  }
});

module.exports = TaskScreenCell;
