import angular from 'angular';
import template from './pagination.tpl.html!text';

let PaginationDirective = {
  template: template,
  bindings: {
    items: '@',
    current: '=',
    perPage: '=',
    nextPage: '&',
    previousPage: '&'
  },
  controller: PaginationController
}

function PaginationController() {
  this.next = next;
  this.prev = prev;
  this.init = init;

  this.itemsPerPage = this.itemsPerPage || 10;
  this.num = this.num || (this.items && this.items.length) ||101;

  let numPages = Math.ceil(this.num/this.itemsPerPage);

  function init() {
    console.log('In the controller');
    console.log(this.current);
    console.log(numPages);
  }

  function next() {
    console.log(this.current);
    this.current += 1;
    if(this.nextPage()) {
      this.nextPage()();
    }
    console.log(this.current);
  }

  function prev() {
    console.log(this.current);
    this.current -= 1;
    if(this.previousPage()) {
      this.previousPage()();
    }
    console.log(this.current);
  }

  this.init();
}

export default PaginationDirective;
