Client = require("rpc-client");

client = new Client({host:"localhost",port:"8080", protocol:"https"});

client.setBasicAuth("caue", "batatinha123");

client.call("RegisterUserSoap", [1,2,4], function(err, result){
  if(!err) {
    console.log("Resultado: " + result);
  }
  else {
    console.log("Error ")
  }
})
