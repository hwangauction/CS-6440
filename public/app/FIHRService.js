/**
 * Created by henry on 3/16/15.
 */
(function(angular, $) {
    "use strict"



    // define api services
    angular.module('app').factory('FIHRService', function($http, $q) {


        return {
            'get' : function( id ) {
                var q = $q.defer();

                $http.get('fihr?path=' + encodeURIComponent('Patient?_id=' + id )).success(function(data) {
                    if (data.entry && data.entry.length) {
                        q.resolve(data.entry[0]);
                    }
                    else {
                        q.reject(data);
                    }
                }).error(function(data) {
                    q.reject(data);
                });

                return q.promise;

            },
            'getObservationsById' : function( id ) {

                var q = $q.defer();

                $http.get('fihr?path=' + encodeURIComponent('Observation?patient=' + id + '&_count=500' )).success(function(data) {


                    var filtered = [];
                    if (data.entry) {

                        for( var i = 0; i < data.entry.length; i ++) {
                            if(data.entry[i].resource.code) {
                                filtered.push(data.entry[i]);
                            }
                        }

                        filtered.sort(function (a, b) {
                            var bDate = b.resource.meta.lastUpdated;


                            var aDate = a.resource.meta.lastUpdated;



                            return bDate.localeCompare(aDate);
                        });
                    }
                    q.resolve(filtered);


                }).error(function(data) {
                    q.reject(data);
                })

                return q.promise;
            },
            'getConditionsById' : function( id ) {


                var q = $q.defer();

                $http.get('fihr?path=' + encodeURIComponent('Condition?patient=' + id + '&_count=500' )).success(function(data) {

                    if (data.entry) {
                        data.entry.sort(function (a, b) {
                            return b.resource.meta.lastUpdated.localeCompare(a.resource.meta.lastUpdated);
                        });
                    }
                    q.resolve(data.entry ? data.entry : []);
                }).error(function(data) {
                    q.reject(data);
                })

                return q.promise;


            },
            'getMedicationPrescriptionById' : function( id ) {

                var q = $q.defer();

                $http.get('fihr?path=' + encodeURIComponent('MedicationPrescription?patient=' + id + '&_count=500' )).success(function(data) {
                    if (data.entry) {
                        data.entry = data.entry.reverse()
                    }
                    q.resolve(data.entry ? data.entry : []);
                }).error(function(data) {
                    q.reject(data);
                })

                return q.promise;


            },
            'list' : function( offset, limit ) {
                if (!offset) offset = 0;
                if (!limit) limit = 200;

                return $http.get('fihr?path=' + encodeURIComponent('Patient?_count=' + limit ) );
            },
            'search' : function( search ) {
                search = $.trim(search);

                if (!search) return this.list();

                return $http.get('fihr?path=' + encodeURIComponent('Patient?name=' + search ) );

            }
        }
    });


})(angular, jQuery);