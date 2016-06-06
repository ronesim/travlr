app.factory('findUserService', ['$http', function($http) {
	return {
		getUsers: function(userSearch) {
			var baseURL = 'http://31.5.42.203:1056/usersNotInGroupByName?';
 			return $http.get(createFindURL(userSearch, baseURL))
 				.success(function(data) {
 				return parseResponseFind(data);
        	})
        		.error(function(err) {
        		return err; 
        	}); 
        }
    }    		
}]);

function createFindURL(userSearch, url) {
	url = addParameter(url, 'userName', userSearch.name);
    url = addParameter(url, 'groupId', userSearch.idGroup);
	return url;
};