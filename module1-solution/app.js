(function () {
  'use strict';

  angular.module('lunchchecker', [])
    .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.messageClass = '';

    $scope.checkLunch = function () {
       if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'red';
        return;
      }

      var items = $scope.lunchItems.split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

      if (items.length === 0) {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'red';
      } else if (items.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.messageClass = 'green';
      } else {
        $scope.message = 'Too much!';
        $scope.messageClass = 'green';
      }
    };
  }
})();
