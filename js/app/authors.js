var authorApp=angular.module('authorApp',[]);

authorApp.controller("myController",function($scope){
    $scope.authors=[
      {'name':'raidentrance'},
      {'name':'Alejandro'},
      {'name':'Alex'},
      {'name':'Alexun'},
    ];

});
