importScripts('https://unpkg.com/mathjs@4.4.1/dist/math.min.js');

// create a parser
var parser = math.parser();

self.addEventListener('message', function(event) {
  var request = JSON.parse(event.data),
      result = null,
      err = null;

  try {
    // evaluate the expression
    result = parser.eval(request.expr);
  }
  catch (e) {
    // return the error
    err = e;
  }

  // build a response
  var response = {
    id: request.id,
    result: result,
    err: err
  };

  // send the response back
  self.postMessage(JSON.stringify(response));

}, false);