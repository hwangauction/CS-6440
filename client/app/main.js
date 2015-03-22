/**
 * Created by henry on 3/16/15.
 */
(function(angular, $) {
    "use strict"

    // declare our app
    angular.module('app', ['ngRoute']);


    // route
    angular.module('app').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'templates/userList.html',
                controller: 'UserListController'
            }).
            when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).
            when('/logout', {
                redirectTo: '/login'
            }).
            when('/patient/:index', {
                templateUrl: 'templates/patient.html',
                controller: 'PatientController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);


    // define controller
    angular.module('app').controller('LoginController', function($scope, $location) {
        $scope.submit = function() {
            $location.path( "/home" );
        };
    });





    angular.module('app').controller('PatientController', function($scope, $routeParams, FIHRService) {
        $scope.patientData = {};

        var index = $routeParams.index;

        FIHRService.get( index ).success( function(data) {
            $scope.patientData = data;
        })

    });

    var userListControllerPatientListCache = [];

    angular.module('app').controller('UserListController', function($scope, $location, FIHRService) {
        $scope.patientList = userListControllerPatientListCache;

        $scope.updatePatientList = function( search ) {

            FIHRService.search( search ).success( function(data) {
                userListControllerPatientListCache = $scope.patientList = data;
            })

        }
    });



    // define api services
    angular.module('app').factory('FIHRService', function($http, $q) {

        var cacheData = [
            {
                id : 123,
                name: 'John Doe',
                dob: '01/01/2015'
            }
        ];

        return {
            'get' : function( index ) {
                return {
                    success : function(cb) {
                        cb( cacheData[index] );
                    },
                    error: function(){}
                }
            },
            'search' : function( search ) {
                return {
                    success : function(cb) {
                        cb(cacheData)
                    },
                    error: function(){}
                }
            }
        }
    });


})(angular, jQuery);