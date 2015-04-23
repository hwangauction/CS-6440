var datalist = [];

exports.list = function(req, res){
    res.json(datalist);
};

exports.random = function(req, res){

    var id = parseInt(req.query.id);
    if (isNaN(id)) id = 1;

    var hash = (id % datalist.length) ;

    var pdmp = datalist[hash];
    res.json(pdmp);

};

var data1 = [
    {
        "Filled":"3/24/2015",
        "ID":1,
        "Written":"3/24/2015",
        "Drug":"OXYCODONE HCL 5 MG TABLET",
        "QTY":60,
        "Days":8,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":223329,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":0,
        "Paid With":"MEDICARE"
    },
    {
        "Filled":"3/25/2015",
        "ID":2,
        "Written":"3/24/2015",
        "Drug":"CLONAZEPAM 1 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":89899,
        "Pharmacy":"FRED'S PHARMACY 145",
        "Refills":2,
        "Paid With":"MEDICARE"
    },
    {
        "Filled":"3/21/2015",
        "ID":1,
        "Written":"3/15/2015",
        "Drug":"LORAZEPAM 1 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"TOOK, MD, SAM J",
        "Rx #":9789,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":4,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/1/2015",
        "ID":1,
        "Written":"3/1/2015",
        "Drug":"CLONAZEPAM 1 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":78988,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":4,
        "Paid With":"MEDICARE"
    },
    {
        "Filled":"2/26/2015",
        "ID":1,
        "Written":"2/26/2015",
        "Drug":"OXYCODONE HCL 5 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":203327,
        "Pharmacy":"FRED'S PHARMACY 145",
        "Refills":0,
        "Paid With":"MEDICARE"
    },
    {
        "Filled":"2/21/2015",
        "ID":1,
        "Written":"2/18/2015",
        "Drug":"LORAZEPAM 1 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"TOOK, MD, SAM J",
        "Rx #":9701,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":5,
        "Paid With":"CASH"
    }
];
datalist.push(data1);

var data2 = [
    {
        "Filled":"3/24/2015",
        "ID":"1",
        "Written":"3/24/2015",
        "Drug":"CLONAZEPAM 0.5 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":478474,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/24/2015",
        "ID":"1",
        "Written":"3/1/2015",
        "Drug":"LORAZEPAM 2 MG TABLET",
        "QTY":240,
        "Days":30,
        "Prescriber":"GONE, NP, GINA B",
        "Rx #":23563,
        "Pharmacy":"WALGREENS 345",
        "Refills":4,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/12/2015",
        "ID":"1",
        "Written":"3/12/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":180,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":435877,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":"1",
        "Written":"2/27/2015",
        "Drug":"CLONAZEPAM 0.5 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":457890,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":"1",
        "Written":"2/27/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":180,
        "Days":30,
        "Prescriber":"FLICKER, MD, MARK H",
        "Rx #":447887,
        "Pharmacy":"WAL-MART PHARMACY 0001",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/25/2015",
        "ID":"1",
        "Written":"2/15/2015",
        "Drug":"LORAZEPAM 2 MG TABLET",
        "QTY":240,
        "Days":30,
        "Prescriber":"GONE, NP, GINA B",
        "Rx #":22576,
        "Pharmacy":"WALGREENS 345",
        "Refills":1,
        "Paid With":"CASH"
    }];
datalist.push(data2);

var data3 = [
    {
        "Filled":"3/24/2015",
        "ID":1,
        "Written":"3/24/2015",
        "Drug":"ALPRAZOLAM 1 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"WELSH, NP, WILL",
        "Rx #":56564,
        "Pharmacy":"CVS 4",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/22/2015",
        "ID":2,
        "Written":"3/22/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":2789,
        "Pharmacy":"FRED'S 89",
        "Refills":4,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/22/2015",
        "ID":1,
        "Written":"3/22/2015",
        "Drug":"HYDROCODONE CHLORPHENIRAMINE SUSPENSION",
        "QTY":240,
        "Days":10,
        "Prescriber":"SAD, NP, SUSIE L",
        "Rx #":49887,
        "Pharmacy":"WAL-MART 89",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/17/2015",
        "ID":3,
        "Written":"3/17/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"PROUD, MD, TONY X",
        "Rx #":39987,
        "Pharmacy":"WALGREENS 48",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/14/2015",
        "ID":1,
        "Written":"3/14/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":377362,
        "Pharmacy":"CVS 4",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/8/2015",
        "ID":2,
        "Written":"3/8/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"SAD, NP, SUSIE L",
        "Rx #":3738,
        "Pharmacy":"FRED'S 89",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/4/2015",
        "ID":3,
        "Written":"3/4/2015",
        "Drug":"ALPRAZOLAM 1 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"WELSH, NP, WILL",
        "Rx #":56478,
        "Pharmacy":"CVS 4",
        "Refills":1,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":2,
        "Written":"2/27/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":2799,
        "Pharmacy":"FRED'S 89",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"2/22/2015",
        "ID":2,
        "Written":"2/22/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":45789,
        "Pharmacy":"WAL-MART 89",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/10/2015",
        "ID":3,
        "Written":"2/10/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":90,
        "Days":30,
        "Prescriber":"PROUD, MD, TONY X",
        "Rx #":39937,
        "Pharmacy":"WALGREENS 48",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"2/1/2015",
        "ID":1,
        "Written":"2/1/2015",
        "Drug":"ALPRAZOLAM 1 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"WELSH, NP, WILL",
        "Rx #":56478,
        "Pharmacy":"CVS 4",
        "Refills":2,
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data3);

var data4 = [
    {
        "Filled":"3/26/2015",
        "ID":1,
        "Written":"3/24/2015",
        "Drug":"HYDROOCON-ACETAMINOPH 7.5-325",
        "QTY":90,
        "Days":15,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":56564,
        "Pharmacy":"FRED'S 88",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/22/2015",
        "ID":1,
        "Written":"3/22/2015",
        "Drug":"HYDROCODONE-ACETAMINOPHEN 10-325",
        "QTY":60,
        "Days":30,
        "Prescriber":"FELIZ, NP, FANNY",
        "Rx #":2789,
        "Pharmacy":"FRED'S 88",
        "Refills":4,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/19/2015",
        "ID":2,
        "Written":"3/19/2015",
        "Drug":"HYDROCODONE CHLORPHENIRAMINE SUSPENSION",
        "QTY":30,
        "Days":10,
        "Prescriber":"FELIZ, NP, FANNY",
        "Rx #":49887,
        "Pharmacy":"WAL-MART 88",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/17/2015",
        "ID":3,
        "Written":"3/17/2015",
        "Drug":"ACETAMINOPHEN-COD #3 TABLET",
        "QTY":30,
        "Days":4,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":39987,
        "Pharmacy":"CVS 41",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/17/2015",
        "ID":3,
        "Written":"3/17/2015",
        "Drug":"DIAZEPAM 5 MG TABLET",
        "QTY":30,
        "Days":10,
        "Prescriber":"TRISTE, MD, TIMOR",
        "Rx #":377362,
        "Pharmacy":"CVS 41",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/8/2015",
        "ID":1,
        "Written":"3/8/2015",
        "Drug":"HYDROCODONE-IBUPROFEN 7.5-200",
        "QTY":16,
        "Days":8,
        "Prescriber":"WHEEL, DMD, RON T",
        "Rx #":3738,
        "Pharmacy":"FRED'S 88",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"1/25/2015",
        "ID":4,
        "Written":"1/25/2015",
        "Drug":"PHENTERMINE 37.5 CAPSULE",
        "QTY":30,
        "Days":30,
        "Prescriber":"FELIZ, NP, FANNY",
        "Rx #":56478,
        "Pharmacy":"WALGREENS 48",
        "Refills":1,
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data4);

var data5 = [
    {
        "Filled":"3/19/2015",
        "ID":1,
        "Written":"3/19/2015",
        "Drug":"CLORAZEPATE 15 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"MENTAL,NP MINDY",
        "Rx #":56564,
        "Pharmacy":"CVS 42",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/16/2015",
        "ID":2,
        "Written":"3/16/2015",
        "Drug":"CLORAZEPATE 15 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"MENTAL,NP MINDY",
        "Rx #":2789,
        "Pharmacy":"FRED'S 90",
        "Refills":4,
        "Paid With":"CASH"
    },
    {
        "Filled":"3/11/2015",
        "ID":3,
        "Written":"3/11/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 5-300",
        "QTY":10,
        "Days":2,
        "Prescriber":"DRUGGY, NP DEANA B",
        "Rx #":49887,
        "Pharmacy":"WAL-MART 90",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/28/2015",
        "ID":4,
        "Written":"2/28/2015",
        "Drug":"CLORAZEPATE 15 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"MENTAL,NP MINDY",
        "Rx #":39987,
        "Pharmacy":"REGION 3 MENTAL HEALTH",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"2/21/2015",
        "ID":1,
        "Written":"2/21/2015",
        "Drug":"HYDROCODON-ACETAMINOPHN 10-325",
        "QTY":20,
        "Days":4,
        "Prescriber":"BELL, MD, WILLIE",
        "Rx #":377362,
        "Pharmacy":"CVS 42",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"2/8/2015",
        "ID":2,
        "Written":"2/8/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 5-325",
        "QTY":10,
        "Days":2,
        "Prescriber":"CLUELESS, MD CANDY",
        "Rx #":3738,
        "Pharmacy":"FRED'S 90",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"1/30/2015",
        "ID":5,
        "Written":"1/30/2015",
        "Drug":"HYDROCODON-ACETAMINOPH 7.50325",
        "QTY":10,
        "Days":3,
        "Prescriber":"DRUGGY, NP DEANA B",
        "Rx #":56478,
        "Pharmacy":"WALGREENS 51",
        "Refills":1,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"1/30/2015",
        "ID":4,
        "Written":"1/30/2015",
        "Drug":"CLORAZEPATE 15 MG TABLET",
        "QTY":90,
        "Days":30,
        "Prescriber":"MENTAL,NP MINDY",
        "Rx #":26353,
        "Pharmacy":"REGION 3 MENTAL HEALTH",
        "Refills":0,
        "Paid With":"CASH"
    }
];
datalist.push(data5);

var data6 = [
    {
        "Filled":"3/26/2015",
        "ID":"1",
        "Written":"3/26/2015",
        "Drug":"TRAMADOL HCL 50 MG TABLET",
        "QTY":240,
        "Days":30,
        "Prescriber":"FLAN, MD ALF",
        "Rx #":56564,
        "Pharmacy":"WALGREENS 52",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/26/2015",
        "ID":"1",
        "Written":"3/26/2015",
        "Drug":"ALPRAZOLAM 1 MG TABLET",
        "QTY":120,
        "Days":30,
        "Prescriber":"FLAN, MD ALF",
        "Rx #":2789,
        "Pharmacy":"WALGREENS 52",
        "Refills":4,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":"1",
        "Written":"2/27/2015",
        "Drug":"TRAMADOL HCL 50 MG TABLET",
        "QTY":240,
        "Days":30,
        "Prescriber":"FLAN, MD ALF",
        "Rx #":49887,
        "Pharmacy":"WALGREENS 52",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":"1",
        "Written":"2/27/2015",
        "Drug":"ALPRAZOLAM 1 MG TABLET",
        "QTY":120,
        "Days":30,
        "Prescriber":"FLAN, MD ALF",
        "Rx #":39987,
        "Pharmacy":"WALGREENS 52",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data6);

var data7 = [
    {
        "Filled":"3/30/2015",
        "ID":1,
        "Written":"3/30/2015",
        "Drug":"ACETAMINOPHEN-COD #4 TABLET",
        "QTY":20,
        "Days":5,
        "Prescriber":"CALE, MD TONYA",
        "Rx #":56564,
        "Pharmacy":"WALGREENS 53",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/22/2015",
        "ID":2,
        "Written":"3/22/2015",
        "Drug":"ZOLPIDEM TARTRATE 10 MG TABLET",
        "QTY":30,
        "Days":30,
        "Prescriber":"POSH, MD AZI",
        "Rx #":2789,
        "Pharmacy":"WAL-MART 91",
        "Refills":4,
        "Paid With":"MEDICARE"
    },
    {
        "Filled":"3/21/2015",
        "ID":3,
        "Written":"3/21/2015",
        "Drug":"OXYCODONE-ACETAMINOPHEN 10-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"POSH, MD AZI",
        "Rx #":49887,
        "Pharmacy":"FRED'S 91",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/16/2015",
        "ID":4,
        "Written":"3/16/2015",
        "Drug":"AMPHETAMINE SALTS 30 MG TAB",
        "QTY":60,
        "Days":30,
        "Prescriber":"GOLE, MD PARV",
        "Rx #":39987,
        "Pharmacy":"CVS 44",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/22/2015",
        "ID":5,
        "Written":"2/22/2015",
        "Drug":"OXYCODONE-ACETAMINOPHEN 10-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"POSH, MD AZI",
        "Rx #":377362,
        "Pharmacy":"MARION DISCOUNT DRUGS",
        "Refills":0,
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/22/2015",
        "ID":6,
        "Written":"2/22/2015",
        "Drug":"ZOLPIDEM TARTRATE 10 MG TABLET",
        "QTY":30,
        "Days":30,
        "Prescriber":"POSH, MD AZI",
        "Rx #":3738,
        "Pharmacy":"ACK DISCOUNT DRUGS",
        "Refills":0,
        "Paid With":"CASH"
    },
    {
        "Filled":"2/17/2015",
        "ID":7,
        "Written":"2/17/2015",
        "Drug":"AMPHETAMINE SALTS 30 MG TAB",
        "QTY":60,
        "Days":30,
        "Prescriber":"JORDY, MD,  RASHA",
        "Rx #":56478,
        "Pharmacy":"CANTON DISCOUNT DRUGS",
        "Refills":1,
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data7);

var data8 = [
    {
        "Filled":"3/30/2015",
        "ID":1,
        "Written":"3/29/2015",
        "Drug":"MORPHINE SULF ER 200 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":3763,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"3/30/2015",
        "ID":1,
        "Written":"3/29/2015",
        "Drug":"MORPHINE SULFATE IR 30 MG TAB",
        "QTY":480,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":3873,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"3/21/2015",
        "ID":2,
        "Written":"3/29/2015",
        "Drug":"MORPHINE SULF ER 200 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":4877,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/16/2015",
        "ID":2,
        "Written":"3/29/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 10-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":3387,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"2/27/2015",
        "ID":1,
        "Written":"2/27/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 10-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":3877,
        "Pharmacy":"B INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/27/2015",
        "ID":1,
        "Written":"2/27/2015",
        "Drug":"MORPHINE SULFATE IR 30 MG TAB",
        "QTY":480,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":4848,
        "Pharmacy":"B INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"2/17/2015",
        "ID":2,
        "Written":"2/27/2015",
        "Drug":"MORPHINE SULF ER 200 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":4887,
        "Pharmacy":"B INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/17/2015",
        "ID":4,
        "Written":"2/27/2015",
        "Drug":"MORPHINE SULF ER 200 MG TABLET",
        "QTY":60,
        "Days":30,
        "Prescriber":"RAT,MD DAVID",
        "Rx #":4887,
        "Pharmacy":"B INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    }
];
datalist.push(data8);

var data9 = [
    {
        "Filled":"3/30/2015",
        "ID":1,
        "Written":"3/29/2015",
        "Drug":"OXYCODON-ACETAMINOPHEN 7.5-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"STRONG, MD TONY",
        "Rx #":4848,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/30/2015",
        "ID":1,
        "Written":"3/29/2015",
        "Drug":"CARISOPRODOL 350 MG TABLET",
        "QTY":30,
        "Days":30,
        "Prescriber":"STRONG, MD TONY",
        "Rx #":3737,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"2/21/2015",
        "ID":2,
        "Written":"2/21/2015",
        "Drug":"OXYCODON-ACETAMINOPHEN 7.5-325",
        "QTY":120,
        "Days":30,
        "Prescriber":"GRIMY, FNP, BRAND",
        "Rx #":4588,
        "Pharmacy":"FREDS 48",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"2/21/2015",
        "ID":2,
        "Written":"2/21/2015",
        "Drug":"CARISOPRODOL 350 MG TABLET",
        "QTY":30,
        "Days":30,
        "Prescriber":"GRIMY, FNP, BRAND",
        "Rx #":4848,
        "Pharmacy":"FREDS 48",
        "Refills":"0",
        "Paid With":"CASH"
    },
    {
        "Filled":"2/15/2015",
        "ID":1,
        "Written":"2/15/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 10-325",
        "QTY":25,
        "Days":5,
        "Prescriber":"BLANK, DMD, STEVE",
        "Rx #":5998,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data9);

var data10 = [
    {
        "Filled":"4/1/2015",
        "ID":1,
        "Written":"4/1/2015",
        "Drug":"TEMAZEPAM 15 MG CAPSULE",
        "QTY":30,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":48488,
        "Pharmacy":"A INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/29/2015",
        "ID":2,
        "Written":"3/29/2015",
        "Drug":"MORPHINE SULFATE IR 30 MG TAB",
        "QTY":45,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":48484,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/29/2015",
        "ID":2,
        "Written":"3/29/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 10-325",
        "QTY":60,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":48487,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/29/2015",
        "ID":2,
        "Written":"3/29/2015",
        "Drug":"MORPHINE SULF ER 100 MG TABLET",
        "QTY":60,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":48484,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/10/2015",
        "ID":2,
        "Written":"3/10/2015",
        "Drug":"MORPHINE SULF ER 100 MG TABLET",
        "QTY":60,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":484848,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/4/2015",
        "ID":2,
        "Written":"3/4/2015",
        "Drug":"HYDROCODON-ACETAMINOPHEN 10-325",
        "QTY":60,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":484847,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    },
    {
        "Filled":"3/4/2015",
        "ID":2,
        "Written":"3/4/2015",
        "Drug":"MORPHINE SULFATE IR 30 MG TAB",
        "QTY":45,
        "Days":15,
        "Prescriber":"POSH, MD, AZI",
        "Rx #":448488,
        "Pharmacy":"C INDEPENDENT PHARMACY",
        "Refills":"0",
        "Paid With":"COMMERCIAL INSURANCE"
    }
];
datalist.push(data10);

