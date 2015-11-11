
angular.module('myApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('capCases', {
            url: '/capCases',
            templateUrl: '/app/_capCases.html'
        }).state('hotCases', {
            url: '/hotCases',
            templateUrl: '/app/_hotCases.html'
        }).state('oldCases', {
            url: '/oldCases',
            templateUrl: '/app/_oldCases.html'
        });

}).run(['$location', function ($location) {
    $location.path('/capCases');

}]).controller('MyController', ['$scope', '$location', 'CasesService', function ($scope, $location, CasesService) {

    $scope.capCases = [];
    $scope.hotCases = [];
    $scope.oldCases = [];

    $scope.getCap = function() {
        CasesService.getCapCases().success(function (data) {
            $scope.capCases = data.capCases;
            $('li.active').removeClass('active');
            $('#cap').addClass('active');
        });
    };


    $scope.getCap();

    $scope.getHot = function() {
        CasesService.getHotCases().success(function (data) {
            $scope.hotCases = data.hotCases;
            $('li.active').removeClass('active');
            $('#hot').addClass('active');
        });
    };

    $scope.showOldCases = function (cust) {
        if(cust) {
            CasesService.getOldCases(cust).success(function (data) {
                $scope.oldCases = data.oldCases;
                $location.path('oldCases');
            });
        }else {
            CasesService.getAllOldCases().success(function (data) {
                $scope.oldCases = data.oldCases;
            });
        }
        $('li.active').removeClass('active');
        $('#old').addClass('active');
    }


}]).factory('CasesService', ['$http', function ($http) {
    return {
        getCapCases: function () {
            return $http.get('getCap');
        },
        getHotCases: function () {
            return $http.get('getHot');
        },
        getOldCases: function (cust) {
            return $http.get('getOldCases/'+cust);
        },
        getAllOldCases: function () {
            return $http.get('getOldCases');
        }
    };
}]);