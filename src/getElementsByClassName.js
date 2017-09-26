// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  //array which will store all elements that include desired className
  var outputArray = [];
  
  //first check if body element has desired className
  //if so, add it to our output element array
  if (document.body.className.includes(className)) {
      outputArray.push(document.body);
    }
  
  //loop through each element in document body and call recursive function
  for (var j = 0; j < document.body.children.length; j++) {
    var currentElement = document.body.children[j];
    output(currentElement);    
  }
  
  function output(element) {
    
    //push element into output array if it contains desired className
    if (element.className.includes(className)) {
      outputArray.push(element);
    }
    
    //if element has children, pass it through the recursive function
    if (element.children.length !== 0) {
      for(var i = 0; i < element.children.length; i++) {
        output(element.children[i]);
      }
    }
  }

  return outputArray;
  
};







