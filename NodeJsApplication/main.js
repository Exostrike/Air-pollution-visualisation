/* global __dirname */

var express = require('express');
var app = express();
var fs = require("fs");

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8383');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/PM10/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/PM10/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm102000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM10/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM10/pm101999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/PM2_5/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM2_5/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm252000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/PM25/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PM25/pm251999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/NH3/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/PNH3/NH32011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH32000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NH3/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NH3/NH31999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/NMVOC/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC2000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NMVOC/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NMVOC/NMVOC1999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/NOX/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX2000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/NOX/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/NOX/NOX1999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2014', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2014.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/SOX/2013', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2013.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2012', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2012.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2011', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2011.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2010', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2010.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2009', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2009.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2008', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2008.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2007', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2007.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2006', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2006.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2005', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2005.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2004', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2004.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2003', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2003.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2002', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2002.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2001', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2001.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/2000', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX2000.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/SOX/1999', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/SOX/SOX1999.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/country/UK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/UK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/country/AT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/AT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/country/BE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/BE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/BG', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/BG.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/CH', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/CH.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/CY', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/CY.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/CZ', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/CZ.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/DE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/DE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/DK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/DK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/EE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/EE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/ES', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/ES.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/FI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/FI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/FR', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/FR.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/HR', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/HR.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/HU', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/HU.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/IE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/IE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/IT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/IT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/LI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/LI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/LT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/LT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/LU', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/LU.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/LV', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/LV.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/NL', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/NL.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/NO', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/NO.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/PL', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/PL.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/PT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/PT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/RO', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/RO.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/SE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/SE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/SI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/SI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/country/SK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/Countries/SK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });


});app.get('/raw/PM10', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/PM10.json", 'utf8', function (err, data) {
       
       res.end( data );
   });

});app.get('/raw/PM2_5', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/PM2_5.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/raw/NH3', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/NH3.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/raw/NMVOC', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/NMVOC.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/raw/NOX', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/NOX.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/raw/SOX', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/SOX.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/rawdata/UK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/UK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});


app.get('/rawdata/AT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/AT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});

app.get('/rawdata/BE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/BE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/BG', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/BG.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/CH', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/CH.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/CY', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/CY.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/CZ', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/CZ.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/DE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/DE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/DK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/DK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/EE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/EE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/ES', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/ES.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/FI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/FI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/FR', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/FR.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/HR', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/HR.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/HU', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/HU.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/IE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/IE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/IT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/IT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/LI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/LI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/LT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/LT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/LU', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/LU.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/LV', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/LV.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/NL', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/NL.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/NO', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/NO.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/PL', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/PL.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/PT', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/PT.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/RO', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/RO.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/SE', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/SE.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/SI', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/SI.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
});app.get('/rawdata/SK', function (req, res , next) {
   fs.readFile( __dirname + "/" + "data/rawdata/Countries/SK.json", 'utf8', function (err, data) {
       
       res.end( data );
   });
   });




var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});

