jest.dontMock('../tasksMixin');

var mixin = require('../tasksMixin');

describe('tasksMixin', function () {
  describe('#addTask', function () {
    it('should not have tasks initially', function () {
      expect(mixin.hasTasks()).toBe(0);
    });

    it('should add a new task', function () {
      mixin.addTask('Do the dishes');
      expect(mixin.hasTasks()).toBe(1);
    });
  });

  describe('#getTasks', function () {
    var tasks;
    beforeEach(function () {
      mixin.addTask('Vaccum the floor');
      tasks = mixin.getTasks();
    });

    it('should have two tasks', function () {
      expect(tasks.length).toBe(2);
    });
  });
});
