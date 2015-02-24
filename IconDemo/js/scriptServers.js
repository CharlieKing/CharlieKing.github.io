(function(angular) {
  'use strict';
angular.module('iconDemo', ['ui.bootstrap'])
  .controller('iconDemoServerCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  
	$scope.items = rootScope.items;

  }]);
  
})(window.angular);