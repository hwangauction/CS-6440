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


        $scope.prescriptionData = [];
        var temp = "3/24/2015	1	3/24/2015	OXYCODONE HCL 5 MG TABLET	60	8	FLICKER, MD, MARK H	223329	WAL-MART PHARMACY 0001	0	MEDICARE\n\
        3/25/2015	2	3/24/2015	CLONAZEPAM 1 MG TABLET	60	30	FLICKER, MD, MARK H	89899	FRED'S PHARMACY 145	2	MEDICARE\n\
        3/21/2015	1	3/15/2015	LORAZEPAM 1 MG TABLET	90	30	TOOK, MD, SAM J	9789	WAL-MART PHARMACY 0001	4	CASH\n\
        3/1/2015	1	3/1/2015	CLONAZEPAM 1 MG TABLET	60	30	FLICKER, MD, MARK H	78988	WAL-MART PHARMACY 0001	4	MEDICARE\n\
        2/26/2015	1	2/26/2015	OXYCODONE HCL 5 MG TABLET	60	30	FLICKER, MD, MARK H	203327	FRED'S PHARMACY 145	0	MEDICARE\n\
        2/21/2015	1	2/18/2015	LORAZEPAM 1 MG TABLET	90	30	TOOK, MD, SAM J	9701	WAL-MART PHARMACY 0001	5	CASH";
        temp = temp.split("\n");
        $.each(temp, function(k,v) {
            $scope.prescriptionData.push( v.split("\t") );
        })


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
                id : 1,
                name: 'John Doe',
                dob: '03/21/1970',
                gender: 'm'
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