var changeAppModule=angular.module('changeAppModule',[]);

changeAppModule.controller("changeController",function($scope){
    $scope.clickCounter=0;
    $scope.check=function(){
      $scope.clickCounter++;
    };
});
