app.directive('userResult', function() {
	return {
		restrict: 'E',
		replace: 'true',
		scope: false,
		templateUrl: 'views/directives/groupMembers/userResult.html'
	};
});