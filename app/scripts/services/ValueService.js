app.service('ValueService', function($http) {

    var values;

    var method = 'GET';
     var url = 'http://localhost:50/api/values/5';
     var contenttype = 'application/json'
  
    this.fetch = function() {
      $http({method: method, url: url})
        .success(function(data, status) {
            values = data;
        })
        .error(function(data, status) {
          values = status;
      });
    };

    this.list = function() {
        this.fetch();
        return values;
    }

})