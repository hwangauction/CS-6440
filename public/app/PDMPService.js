/**
 * Created by henry on 3/16/15.
 */
(function(angular, $) {
    "use strict"



    // define api services
    angular.module('app').factory('PDMPService', function($http, $q) {


        return {
            'getMedicationPrescriptionById' : function( id ) {

                //var hash = (parseFloat(id) * 1e9) % 10;


                //var data = [{"Filled":"3/30/2015","ID":1,"Written":"3/30/2015","Drug":"ACETAMINOPHEN-COD #4 TABLET","QTY":20,"Days":5,"Prescriber":"CALE, MD TONYA","Rx #":56564,"Pharmacy":"WALGREENS 53","Refills":0,"Paid With":"COMMERCIAL INSURANCE"},{"Filled":"3/22/2015","ID":2,"Written":"3/22/2015","Drug":"ZOLPIDEM TARTRATE 10 MG TABLET","QTY":30,"Days":30,"Prescriber":"POSH, MD AZI","Rx #":2789,"Pharmacy":"WAL-MART 91","Refills":4,"Paid With":"MEDICARE"},{"Filled":"3/21/2015","ID":3,"Written":"3/21/2015","Drug":"OXYCODONE-ACETAMINOPHEN 10-325","QTY":120,"Days":30,"Prescriber":"POSH, MD AZI","Rx #":49887,"Pharmacy":"FRED'S 91","Refills":0,"Paid With":"COMMERCIAL INSURANCE"},{"Filled":"3/16/2015","ID":4,"Written":"3/16/2015","Drug":"AMPHETAMINE SALTS 30 MG TAB","QTY":60,"Days":30,"Prescriber":"GOLE, MD PARV","Rx #":39987,"Pharmacy":"CVS 44","Refills":0,"Paid With":"COMMERCIAL INSURANCE"},{"Filled":"2/22/2015","ID":5,"Written":"2/22/2015","Drug":"OXYCODONE-ACETAMINOPHEN 10-325","QTY":120,"Days":30,"Prescriber":"POSH, MD AZI","Rx #":377362,"Pharmacy":"MARION DISCOUNT DRUGS","Refills":0,"Paid With":"COMMERCIAL INSURANCE"},{"Filled":"2/22/2015","ID":6,"Written":"2/22/2015","Drug":"ZOLPIDEM TARTRATE 10 MG TABLET","QTY":30,"Days":30,"Prescriber":"POSH, MD AZI","Rx #":3738,"Pharmacy":"ACK DISCOUNT DRUGS","Refills":0,"Paid With":"CASH"},{"Filled":"2/17/2015","ID":7,"Written":"2/17/2015","Drug":"AMPHETAMINE SALTS 30 MG TAB","QTY":60,"Days":30,"Prescriber":"JORDY, MD,  RASHA","Rx #":56478,"Pharmacy":"CANTON DISCOUNT DRUGS","Refills":1,"Paid With":"COMMERCIAL INSURANCE"}];

                return $http.get('/pdmp?id=' + id);


            }
        }
    });


})(angular, jQuery);