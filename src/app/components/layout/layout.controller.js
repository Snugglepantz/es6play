'use strict';

import angular from 'angular';

class LayoutController {
  constructor(LayoutService, $mdSidenav, $mdBottomSheet, $log) {
    this.users = [];
    this.LayoutService = LayoutService;
    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;
    this.$log = $log;
    this.LayoutService
      .loadAll()
      .then((users) => {
        this.users = [].concat(users);
        this.selected = users[0];
      });
  }

  toggleUsersList() {
    this.$log.debug( 'toggleUsersList() ');
    this.$mdSidenav('left').toggle();
  }

  selectUser (user) {
    this.$log.debug( "selectUser( {name} ) ", user);

    this.selected = angular.isNumber(user) ? $scope.users[user] : user;
    this.toggleUsersList();
  }

  share($event) {
    this.$log.debug( "contactUser()");

    var user = this.selected;

    this.$mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      templateUrl: bottomSheetTemplate.name,
      controller: UserSheetController,
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    }).then(function(clickedItem) {
      this.$log.debug( clickedItem.name + ' clicked!');
    });
  }
}

LayoutController.$inject = ['LayoutService', '$mdSidenav', '$mdBottomSheet', '$log'];

export {LayoutController};
