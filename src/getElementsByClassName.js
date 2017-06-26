// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodes = [];

  function getNodes(node) {
    if(node.classList.contains(className)){
      nodes.push(node);
    } 
  
    var children = Array.from(node.children);

    for(var i = 0; i < children.length; i++) {
      getNodes(children[i]);
    }
  }

  getNodes(document.body);
  return nodes;
};

/*
  get all the nodes of the html <body>
  for each node:
    
      write a function that checks children for classname.
      if there is classname, push it to an array;
    
    base case: node doesn't have children
    recursive case: node has children

*/
