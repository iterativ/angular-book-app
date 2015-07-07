(function() {
  angular.module('itApp').filter('shortname', function() {
    return function(input, num) {
      input = input || '';
      num = num || 14;

      if(input.length > num) {
        return input.substr(0, num) + '...';
      }

      return input;
    };
  });
}());
