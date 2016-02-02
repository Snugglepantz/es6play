import angular from 'angular';

class Example1Controller {
  constructor() {
    this.todos = [
      {
        num: 1,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        num: 2,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        num: 3,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        num: 4,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        num: 5,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
    let i = 1;
    this.todos = this.todos.concat(angular.copy(this.todos));
    this.todos = this.todos.concat(angular.copy(this.todos));
    this.todos = this.todos.concat(angular.copy(this.todos));
    this.todos = this.todos.concat(angular.copy(this.todos));
    this.todos.forEach(function(todo) {
      todo.num = i++;
    });
    this.currentPage = 1;
    this.itemsPerPage = 10;
  }
}

export default Example1Controller;
