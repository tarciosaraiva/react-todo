'use strict';

var React            = require('react-native');
var TasksScreen      = require('./TasksScreen');
var CreateTaskScreen = require('./CreateTaskScreen');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var todo = React.createClass({

  updateTaskList: function (text) {
    TasksScreen.loadTasks(TASK_BUFFER);
  },

  onRightButtonPress: function () {
    var updateFn = this.updateTaskList;
    this.refs.nav.push({
      title: 'Create Task',
      component: CreateTaskScreen
    });
  },

  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        ref='nav'
        initialRoute={{
          title: 'Task List',
          component: TasksScreen,
          rightButtonTitle: 'Add Task',
          onRightButtonPress: this.onRightButtonPress
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('todo', () => todo);

module.exports = todo;
