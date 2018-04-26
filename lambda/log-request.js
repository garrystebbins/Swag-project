
var GoogleSpreadsheet = require('google-spreadsheet');
var async             = require('async');

// use local environment variables as appropriate
require('dotenv').config();

var doc = new GoogleSpreadsheet(process.env.SHEET_ID);
var sheet;

export function handler(event, context, callback) {

  var body = JSON.parse(event.body);
  console.log(body);


  async.series([
    function setAuth(step) {
      var creds_json = {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
      }
      doc.useServiceAccountAuth(creds_json, step);
    },
    function getInfoAndWorksheets(step) {
      doc.getInfo(function(err, info) {
        if(err) {console.log(err);}
        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        sheet = info.worksheets[0];
        step();
      });
    },
    function insertRow(step) {


      console.log(`Inserting data into ${sheet.title}`);
      var new_row = {
        name: "name",
        address: "address",
        zip: "zip",
        country: "country",
        email: "email",
        comments: "comments"
      };
      doc.addRow("1", new_row, function(err, row){
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
  });


}
