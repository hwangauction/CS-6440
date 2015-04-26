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
            when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterController'
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

    angular.module('app').
        filter('htmlToPlaintext', function() {
            return function(text) {
                if (!text) return '';
                return String(text).replace(/<[^>]+>/gm, '');
            }
        }
    );


    // define controller
    angular.module('app').controller('LoginController', function($scope, $location) {
        $scope.submit = function() {
            $location.path( "/home" );
        };
    });



    // define controller
    angular.module('app').controller('RegisterController', function($scope, $location) {
        $scope.submit = function() {
            $location.path( "/home" );
        };
    });





    angular.module('app').controller('PatientController', function($scope, $routeParams, $q, FIHRService, PDMPService) {
        $scope.patientData = {};

        var id = $routeParams.index;
        $scope.notFound = false;
        $scope.loading = true;


        FIHRService.get( id ).then( function(data) {
            $scope.patientData = data;


            var fihrMedData;
            var pdmpMedData;

            $q.all(
                {
                    fihr : FIHRService.getMedicationPrescriptionById( id ).then( function(data) {
                        return fihrMedData = data;
                    }),
                    pdmp : PDMPService.getMedicationPrescriptionById( id ).success( function(data) {
                        return pdmpMedData = data;
                    } ),
                    observation :  FIHRService.getObservationsById( id ).then( function(data) {
                            $scope.observationData = data;
                        }),
                    condition : FIHRService.getConditionsById( id ).then( function(data) {
                        $scope.conditionData = data;
                    })

            }
            ).then( function() {

                    $scope.loading = false;


                    // combine both data based on date
                    var combinedData = [];




                    for( var i = 0; i < fihrMedData.length; i ++) {
                        var item = fihrMedData[i].resource;
                        combinedData.push({
                            dateWritten : new Date(item.dateWritten),
                            dateFilled : null,
                            refills: '-',
                            quantity : item.dispense && item.dispense.quantity ? item.dispense.quantity.value : '',
                            dosage : '',
                            instruction : item.dispense && item.dispense.expectedSupplyDuration ?
                                item.dispense.expectedSupplyDuration.value +  ' ' + item.dispense.expectedSupplyDuration.units : '',
                            medication : item.medication.display,
                            prescriber : '-',
                            status : item.status,
                            source: 'fihr'
                        })
                    }
                    for( var i = 0; i < pdmpMedData.length; i ++) {
                        var item = pdmpMedData[i];
                        combinedData.push( {
                            dateWritten : new Date(item.Written),
                            dateFilled : new Date(item.Filled),
                            refills: item.Refills,
                            quantity : item.QTY,
                            dosage : '',
                            instruction : item.Days + ' days',
                            medication : item.Drug,
                            prescriber : item.Prescriber,
                            status : item.status,
                            source : 'pdmp'
                        })
                    }

                    combinedData.sort(function(a,b) {
                        return b.dateWritten.getTime() - a.dateWritten.getTime();
                    })

                    $scope.medicationPrescriptionData = combinedData;
            })

        }, function(data) {
            $scope.notFound = true;
            $scope.loading = false;
        })


    });




    var userListControllerPatientListCache = [];

    angular.module('app').controller('UserListController', function($scope, $location, FIHRService) {
        FIHRService.list().success( function(data) {

            userListControllerPatientListCache = $scope.patientList = data.entry;
        });


        $scope.updatePatientList = function( search ) {
            FIHRService.search( search ).success( function(data) {
                userListControllerPatientListCache = $scope.patientList = data.entry;
            })
        }
    });





})(angular, jQuery);