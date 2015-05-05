'use strict';

var React      = require('react-native');
var TasksMixin = require('./tasksMixin');

var {
  NavigatorIOS,
  StyleSheet,
  TextInput,
  Text,
  ScrollView
} = React;

var CreateTaskScreen = React.createClass({
  mixins: [TasksMixin],
  onSubmitEditing: function (evt) {
    this.addTask(evt.nativeEvent.text);
  },
  render: function () {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          placeholder="What you need to do...."
          autoCapitalize="words"
          autoCorrect={false}
          autoFocus={true}
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically={true}
          returnKeyType="go"
          onSubmitEditing={this.onSubmitEditing}
          style={styles.taskInput} />
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  taskInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 10,
    margin: 7,
    fontSize: 20,
  }
});

module.exports = CreateTaskScreen
