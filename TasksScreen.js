'use strict';

var React          = require('react-native');
var TasksMixin     = require('./tasksMixin');
var TaskScreenCell = require('./TaskScreenCell');

var {
  StyleSheet,
  ListView,
  Text,
  View
} = React;

var NoTasks = React.createClass({
  render: function() {
    return (
      <View style={[styles.container]}>
        <Text>No tasks entered yet.</Text>
      </View>
    );
  }
});

var TasksScreen = React.createClass({
  mixins: [TasksMixin],
  getInitialState: function () {
    return {
      updated: false,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  },

  componentWillUpdate: function() {
    if (this.hasTasks() && !this.state.updated) {
      this.loadTasks();
    }
  },

  componentDidUpdate: function () {
    if (this.state.updated) {
      this.setState({updated: false});
    }
  },

  loadTasks: function () {
    this.setState({
      updated: true,
      dataSource: this.state.dataSource.cloneWithRows(TasksMixin.tasks)
    });
  },

  renderRow: function (task) {
    return (
      <TaskScreenCell task={task} />
    );
  },

  render: function () {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <NoTasks />
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          showsVerticalScrollIndicator={false} />
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  }
});

module.exports = TasksScreen;
