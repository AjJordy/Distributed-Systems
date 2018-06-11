var soap = require('soap');
var url = ' https://www.paypalobjects.com/wsdl/PayPalSvc.wsdl';
var price = 100.00;
var args = {price: 'Price'};

soap.createClient(url, function(err, client) {
  client.OptionSelectionDetailsType(args, function(err, result) {
      console.log(result);
  });
});
