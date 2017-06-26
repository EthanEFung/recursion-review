// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
  object to house different methods
  check data types

  isNum
  isBoolean

  

  
*/


var dataTypes = {

  'isNum' : (val) => typeof val === 'number',
  'isNull' : (val) => val === null,
  'isBoolean' : (val) => typeof val === 'boolean',
  'isString' : (val) => typeof val === 'string' ,
  'isArray' : (val) => Array.isArray(val),
  'isObject' : (val) => typeof val === 'object',
  'isFunc' : (val) => typeof val === 'function',
  'isUndefined': (val) => val === undefined

};




var primitives = [dataTypes.isNum, dataTypes.isBoolean, dataTypes.isNull];
//var unstringifiableValues = [dataTypes.isFunc, dataTypes.isUndefined];
//var references = [dataTypes.isArray, dataTypes.isObject];

var stringifyJSON = function(obj) {
  var JSONstring = '';
  var isPrimitive = primitives.some(function(func){
    return func(obj);
  });
  
  if (typeof obj === 'string'){
    JSONstring += '"' + obj + '"';
  }
  if (isPrimitive){
    JSONstring += obj;
  }
  
  if (Array.isArray(obj)){
    JSONstring += '['
    for (var i = 0; i < obj.length; i++){
      if (i !== obj.length - 1) {
        JSONstring += stringifyJSON(obj[i]) + ',';
      } else {
        JSONstring += stringifyJSON(obj[i])
      }
    }
    JSONstring += ']'
  } else if (typeof obj === 'object' && obj !== null){
  
    //console.log(Object.keys(obj).length);
    JSONstring += '{';
    var count = 0;
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function' ){
        return '{}'
      }
      
      if (obj.hasOwnProperty(key)){
      if (count < Object.keys(obj).length -1){
        //console.log(key)
        //console.log(obj[key])
        JSONstring += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',' 
        count++
      } else {
        JSONstring += stringifyJSON(key) + ':' + stringifyJSON(obj[key])
      }
      }
    }
    JSONstring += '}';  
  }
  return  JSONstring;
  
}
 
stringifyJSON({'foo': true, 'bar': false, 'baz': null}); 

  //if undefined --> 'undefind'
  //if booleans
  // numbers
  
  


  //if its an object
    //stringifyJSON()
  //base layers - primitive values  
  //recursive type - on arrays, objects types
  




function test(expected, actual, testName) {
  if(expected === actual) {
    console.log('passed for', testName)
  } else {
    console.log('expected',  expected, ' but got ', actual, ' for ', testName);
  }
}
/*
test(JSON.stringify(9), stringifyJSON(9), 'should pass numbers');
test(JSON.stringify(null), stringifyJSON(null), 'should pass null');
test(JSON.stringify(true), stringJSON(true), 'should pass booleans');
test(JSON.stringify('hello'), stringifyJSON('hello'), 'should pass strings');
test(JSON.stringify([]), stringifyJSON([]), 'should pass empty arrays');
*/
