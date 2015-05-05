'use strict';

var TasksMixin = {
  tasks: [],

  addTask: function (task) {
    this.tasks.push(task);
  },

  getTasks: function () {
    return this.tasks;
  },

  hasTasks: function () {
    return this.tasks.length;
  }
};

module.exports = TasksMixin;
