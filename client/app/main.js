/**
 * Created by henry on 3/16/15.
 */
(function(angular, $) {
    "use strict"


    var patientList = {"resourceType":"Bundle","id":"bad2a960-b041-4d70-9ca9-1b503b75bbfa","published":"2015-04-13T13:50:45.567-04:00","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient?_format=json"},{"rel":"next","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir?_getpages=0a24d0b5-c7ab-424a-9219-0c6604638124&_getpagesoffset=50&_count=50&_format=json"},{"rel":"fhir-base","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir"}],"totalResults":"305","author":[{"name":"I3L ExactData and HealthVault FHIR Server"}],"entry":[{"title":"Patient 1.1","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/1.1","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/1.1"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Anita Coag</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"1.1"}],"name":[{"family":["Coag"],"given":["Anita"]}]}},{"title":"Patient 3.568001602-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.568001602-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.568001602-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Lacy C. Mcpherson</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.568001602-01"}],"name":[{"family":["Mcpherson"],"given":["Lacy C."]}]}},{"title":"Patient 3.937650000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.937650000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.937650000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Alexa G. Craft</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.937650000-01"}],"name":[{"family":["Craft"],"given":["Alexa G."]}]}},{"title":"Patient 3.666214171-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666214171-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666214171-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Ignacia D. Boyle</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666214171-01"}],"name":[{"family":["Boyle"],"given":["Ignacia D."]}]}},{"title":"Patient 3.666383984-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666383984-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666383984-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Carter K. Adkins</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666383984-01"}],"name":[{"family":["Adkins"],"given":["Carter K."]}]}},{"title":"Patient 3.666643100-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666643100-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666643100-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Emery A. Bolton</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666643100-01"}],"name":[{"family":["Bolton"],"given":["Emery A."]}]}},{"title":"Patient 3.666159871-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666159871-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666159871-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Eleanor L. Flowers</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666159871-01"}],"name":[{"family":["Flowers"],"given":["Eleanor L."]}]}},{"title":"Patient 3.358020000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.358020000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.358020000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Karyn V. Wiggins</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.358020000-01"}],"name":[{"family":["Wiggins"],"given":["Karyn V."]}]}},{"title":"Patient 3.666867671-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666867671-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666867671-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Knox B. Odom</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666867671-01"}],"name":[{"family":["Odom"],"given":["Knox B."]}]}},{"title":"Patient 3.666476868-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666476868-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666476868-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Freya K. Flowers</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666476868-01"}],"name":[{"family":["Flowers"],"given":["Freya K."]}]}},{"title":"Patient 3.918990000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.918990000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.918990000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Aidan C. Walker</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.918990000-01"}],"name":[{"family":["Walker"],"given":["Aidan C."]}]}},{"title":"Patient 3.409000151-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.409000151-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.409000151-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Burke J. Swanson</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.409000151-01"}],"name":[{"family":["Swanson"],"given":["Burke J."]}]}},{"title":"Patient 3.090450000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.090450000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.090450000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Clinton V. Franklin</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.090450000-01"}],"name":[{"family":["Franklin"],"given":["Clinton V."]}]}},{"title":"Patient 3.052000568-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.052000568-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.052000568-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Nicholas Y. Holloway</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.052000568-01"}],"name":[{"family":["Holloway"],"given":["Nicholas Y."]}]}},{"title":"Patient 3.052000568-02","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.052000568-02","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.052000568-02"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Alma A. Holloway</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.052000568-02"}],"name":[{"family":["Holloway"],"given":["Alma A."]}]}},{"title":"Patient 3.333001307-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.333001307-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.333001307-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Amery W. Mcdowell</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.333001307-01"}],"name":[{"family":["Mcdowell"],"given":["Amery W."]}]}},{"title":"Patient 3.000050471-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000050471-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000050471-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Blaine N. Bradley</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000050471-01"}],"name":[{"family":["Bradley"],"given":["Blaine N."]}]}},{"title":"Patient 3.882003310-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.882003310-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.882003310-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Quintessa R. Williamson</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.882003310-01"}],"name":[{"family":["Williamson"],"given":["Quintessa R."]}]}},{"title":"Patient 3.000382751-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000382751-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000382751-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Lars E. Harper</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000382751-01"}],"name":[{"family":["Harper"],"given":["Lars E."]}]}},{"title":"Patient 3.666888721-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666888721-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666888721-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Chastity T. Hinton</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666888721-01"}],"name":[{"family":["Hinton"],"given":["Chastity T."]}]}},{"title":"Patient 3.666888721-02","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666888721-02","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666888721-02"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Akeem C. Hinton</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666888721-02"}],"name":[{"family":["Hinton"],"given":["Akeem C."]}]}},{"title":"Patient 3.000138144-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000138144-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000138144-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Shelley E. Curry</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000138144-01"}],"name":[{"family":["Curry"],"given":["Shelley E."]}]}},{"title":"Patient 3.894010000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.894010000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.894010000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Solomon C. Page</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.894010000-01"}],"name":[{"family":["Page"],"given":["Solomon C."]}]}},{"title":"Patient 3.666317375-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666317375-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666317375-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Nita J. Bell</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666317375-01"}],"name":[{"family":["Bell"],"given":["Nita J."]}]}},{"title":"Patient 3.000367227-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000367227-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000367227-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>John W. Robinson</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000367227-01"}],"name":[{"family":["Robinson"],"given":["John W."]}]}},{"title":"Patient 3.771130000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.771130000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.771130000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Indigo K. Moses</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.771130000-01"}],"name":[{"family":["Moses"],"given":["Indigo K."]}]}},{"title":"Patient 3.000457683-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000457683-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000457683-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Victor K. Gomez</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000457683-01"}],"name":[{"family":["Gomez"],"given":["Victor K."]}]}},{"title":"Patient 3.830000095-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.830000095-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.830000095-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Dylan T. Morgan</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.830000095-01"}],"name":[{"family":["Morgan"],"given":["Dylan T."]}]}},{"title":"Patient 3.666151406-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666151406-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666151406-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Lane T. Rojas</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666151406-01"}],"name":[{"family":["Rojas"],"given":["Lane T."]}]}},{"title":"Patient 3.000967726-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000967726-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000967726-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Robert A. Lara</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000967726-01"}],"name":[{"family":["Lara"],"given":["Robert A."]}]}},{"title":"Patient 3.872770000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.872770000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.872770000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Jordan S. Walker</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.872770000-01"}],"name":[{"family":["Walker"],"given":["Jordan S."]}]}},{"title":"Patient 3.596006027-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.596006027-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.596006027-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Murphy A. Goodman</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.596006027-01"}],"name":[{"family":["Goodman"],"given":["Murphy A."]}]}},{"title":"Patient 3.018003376-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.018003376-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.018003376-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Aileen M. Nieves</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.018003376-01"}],"name":[{"family":["Nieves"],"given":["Aileen M."]}]}},{"title":"Patient 3.000330124-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000330124-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000330124-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Hyatt T. Bond</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000330124-01"}],"name":[{"family":["Bond"],"given":["Hyatt T."]}]}},{"title":"Patient 3.000232359-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000232359-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000232359-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Ignacia S. Donovan</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000232359-01"}],"name":[{"family":["Donovan"],"given":["Ignacia S."]}]}},{"title":"Patient 3.083003009-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.083003009-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.083003009-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Harrison T. Huffman</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.083003009-01"}],"name":[{"family":["Huffman"],"given":["Harrison T."]}]}},{"title":"Patient 3.666655553-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666655553-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666655553-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Alisa P. Garner</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666655553-01"}],"name":[{"family":["Garner"],"given":["Alisa P."]}]}},{"title":"Patient 3.000949115-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000949115-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000949115-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Chelsea H. Shaffer</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000949115-01"}],"name":[{"family":["Shaffer"],"given":["Chelsea H."]}]}},{"title":"Patient 3.371008251-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.371008251-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.371008251-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Jakeem C. Haney</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.371008251-01"}],"name":[{"family":["Haney"],"given":["Jakeem C."]}]}},{"title":"Patient 3.297007842-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.297007842-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.297007842-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Timon L. Macias</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.297007842-01"}],"name":[{"family":["Macias"],"given":["Timon L."]}]}},{"title":"Patient 3.666522513-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666522513-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666522513-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Nolan J. Booth</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666522513-01"}],"name":[{"family":["Booth"],"given":["Nolan J."]}]}},{"title":"Patient 3.666349098-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666349098-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666349098-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Carson K. Malone</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666349098-01"}],"name":[{"family":["Malone"],"given":["Carson K."]}]}},{"title":"Patient 3.000607885-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000607885-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000607885-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Anthony M. Sears</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000607885-01"}],"name":[{"family":["Sears"],"given":["Anthony M."]}]}},{"title":"Patient 3.000581657-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000581657-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000581657-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Axel Z. Alford</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000581657-01"}],"name":[{"family":["Alford"],"given":["Axel Z."]}]}},{"title":"Patient 3.000592301-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000592301-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000592301-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Veda R. Leon</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000592301-01"}],"name":[{"family":["Leon"],"given":["Veda R."]}]}},{"title":"Patient 3.000854713-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000854713-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000854713-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Tatum R. Vega</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000854713-01"}],"name":[{"family":["Vega"],"given":["Tatum R."]}]}},{"title":"Patient 3.000299742-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000299742-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.000299742-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Martha L. Michael</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.000299742-01"}],"name":[{"family":["Michael"],"given":["Martha L."]}]}},{"title":"Patient 3.544470000-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.544470000-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.544470000-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Palmer R. Barrera</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.544470000-01"}],"name":[{"family":["Barrera"],"given":["Palmer R."]}]}},{"title":"Patient 3.941001175-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.941001175-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.941001175-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Linus L. Adams</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.941001175-01"}],"name":[{"family":["Adams"],"given":["Linus L."]}]}},{"title":"Patient 3.666690085-01","id":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666690085-01","link":[{"rel":"self","href":"https://taurus.i3l.gatech.edu:8443/HealthPort/fhir/Patient/3.666690085-01"}],"published":"2015-04-13T13:50:45-04:00","content":{"resourceType":"Patient","text":{"status":"generated","div":"<table><tr><td>Name</td><td>Venus B. Mccall</td></tr></table>"},"identifier":[{"system":"urn:healthport:mrns","value":"3.666690085-01"}],"name":[{"family":["Mccall"],"given":["Venus B."]}]}}]};


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

        var index = $routeParams.index;


        FIHRService.get( index ).success( function(data) {
            $scope.patientData = data;


            var id = data.content.identifier[0].value;


            FIHRService.getObservationsById( id ).success( function(data) {
                $scope.observationData = data;
            })

            FIHRService.getConditionsById( id ).success( function(data) {
                $scope.conditionData = data;
            })


            var fihrMedData;
            var pdmpMedData;

            $q.all(
                {
                    fihr : FIHRService.getMedicationPrescriptionById( id ).success( function(data) { return fihrMedData = data; }),
                    pdmp : PDMPService.getMedicationPrescriptionById( id ).success( function(data) { return pdmpMedData = data; } )
                }
            ).then( function() {
                    // combine both data based on date
                    var combinedData = [];



                    for( var i = 0; i < fihrMedData.length; i ++) {
                        var item = fihrMedData[i].content;
                        combinedData.push({
                            dateWritten : new Date(item.dateWritten),
                            dateFilled : null,
                            refills: item.dispense.numberOfRepeatsAllowed,
                            quantity : item.dispense.quantity.value,
                            dosage : item.dosageInstruction[0].doseQuantity.value + ' ' + (item.dosageInstruction[0].doseQuantity.unit ? item.dosageInstruction[0].doseQuantity.unit : ''),
                            instruction : item.dosageInstruction[0].text,
                            medication : item.medication.display,
                            prescriber : item.prescriber.display,
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

                    console.log(combinedData)

                    $scope.medicationPrescriptionData = combinedData;
            })

        })


    });




    var userListControllerPatientListCache = [];

    angular.module('app').controller('UserListController', function($scope, $location, FIHRService) {
        FIHRService.list().success( function(data) {
            userListControllerPatientListCache = $scope.patientList = data;
        });


        $scope.updatePatientList = function( search ) {
            FIHRService.search( search ).success( function(data) {
                userListControllerPatientListCache = $scope.patientList = data;
            })
        }
    });





})(angular, jQuery);