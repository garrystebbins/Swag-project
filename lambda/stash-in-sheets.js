
var GoogleSpreadsheet = require('google-spreadsheet');
var async             = require('async');

// use local environment variables as appropriate
require('dotenv').config();

var doc = new GoogleSpreadsheet(process.env.SHEET_ID);
var sheet;

export function handler(event, context, callback) {

  async.series([

    // Authenticate with the Sheets API
    function setAuth(step) {
      var creds_json = {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
      }
      doc.useServiceAccountAuth(creds_json, step);
    },

    // Gather and log some info about the document
    function getInfoAndWorksheets(step) {
      doc.getInfo(function(err, info) {
        if(err) {console.log(err);}
        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        sheet = info.worksheets[0];
        step();
      });
    },

    // Add a row to the sheet
    function insertRow(step) {
      console.log(`Inserting data into ${sheet.title}`);
      var body = JSON.parse(event.body);
      var new_row = {
        date: new Date(),
        name: body.data.name,
        address: body.data.address,
        zip: body.data.zip,
        country: body.data.country,
        email: body.data.email,
        comments: body.data.comments
      };
      doc.addRow(body.data.tab, new_row, function(err, row){
        if(err){
          console.log(err);
        } else {
          console.log(`Data added to ${sheet.title}`);
        }
      });
      step();
    }
  ], function(err){
      if( err ) {
        console.log('Error: '+err);
      }
      callback(null, {
        statusCode: 200,
        body: "serverless function finished its work."
      })
  });


}
