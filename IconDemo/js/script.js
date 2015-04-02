(function(angular) {
  'use strict';
angular.module('iconDemo', ['ui.bootstrap'])
  .controller('iconDemoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  
  
  $scope.categories = [
		{ category: 'Beers', items: [
			{ title: 'Beard Grower',
				institution: 'American University',
				location: 'Madison, WI',
				price: 4.5,
				lines: [
					'This shit will put some American-Style facial hair on you. Yes, even the ladies. Beware'
				]
			},
			{ title: 'Knockout Booty',
				institution: 'American University',
				location: 'Columbus, OH',
				price: 4,
				lines: [
					'Her booty knocks you out, so we brewed it into a beer to do the same'
				]
			},
			{ title: 'Titty Shaker',
				institution: 'American University',
				location: 'Seattle, WA',
				price: 5,
				lines: [
					'Get those lucious globes bouncing with this delicious session brew'
				]
			}
		]},
		{ category: 'Breads', items: [
			{ title: 'Crusty Dope Bread',
				institution: '',
				location: 'Seattle, WA',
				price: 8,
				lines: [
					'Order with butter and Jam, Might make you poop'
				]
			},
			{ title: 'Seeing Bread',
				institution: 'Tresata',
				location: 'Charlotte, NC',
				price: 8,
				lines: [
					'This bread will make you seriously freak out'
				]
			},
			{ title: 'Bread Wine',
				institution: 'Madewell',
				location: 'New York City, NY',
				price: 8,
				lines: [
					'Order with your favorite wine!'
				]
			},
		]},
		{ category: 'Pizza', items: [
			{ title: 'Deep Dish Pep',
				institution: 'Bulletproof Executive',
				location: 'Seattle, WA',
				price: 12,
				lines: [
					'Chicago Style with thick cut pepperoni'
				]
			},
			{ title: '"The Works"',
				institution: 'EasyDraft',
				location: 'Charlotte, NC',
				price: 14,
				lines: [
					'This pizza has everything but the kitchen sink'
				]
			},
			{ title: 'Gross Pizza',
				institution: 'Lockheed Martin',
				location: 'Washington, DC',
				price: 5.99,
				lines: [
					'This pizza is seriously gross'
				]
			}
		]}
	];
	
	
	$scope.items = [];
	$scope.totalPrice = 0;

	$scope.addItem = function(newItem) {
		$scope.items.push(newItem);
		$scope.totalPrice += newItem.price;
	};
	
	$scope.placeOrder = function() {
		rootScope.items = scope.items;
	}

  }]);
  
})(window.angular);