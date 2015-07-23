var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){
    $scope.quotes = dataService.getData();

    $scope.addQuotes = function(quote) {
            dataService.addData(quote);
        };

    $scope.removeQuotes = function(input){
        dataService.removeData(input);
    };
    $scope.searchTerm = [];

    $scope.removeQuote = function(){
        dataService.removing();
    };

});