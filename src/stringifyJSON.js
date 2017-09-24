
var stringifyJSON = function(obj) {
var string = '' ;
return output(obj);

function output(obj) {
  if (typeof obj === 'number') {
  return String(obj);
}
  
if (typeof obj === 'string') {
  return '\"' + obj + '\"';
}

if (obj === null) {
  return String(null);
}

if (typeof obj === 'boolean') {
  return String(obj);
}
  
if (Array.isArray(obj)) {
  var once = false;
  string += '[';
  for(var i = 0; i < obj.length; i++) {
    if(once) {
      string += ',';
    }
    //do something
    if(typeof obj[i] !== 'object') {
      string+=output(obj[i]);
      once = true;
    }
    if(typeof obj[i] === 'object') {
      output(obj[i]);
      once = true;
    }
  }
  string += ']';
  return String(string);
}
  
if (typeof obj === 'object' && !Array.isArray(obj)) {
  var once = false;
  string += '{';
  for(var key in obj) {
    if(once) {
      string += ',';
    }
    //do something
    if(obj[key] !== undefined && typeof obj[key] !== 'function') {
      string += '"'+ key + '"' + ':';
    }
    if(typeof obj[key] === 'number') {
      string += obj[key];
      once = true;
    }
    if(typeof obj[key] === 'string') {
      string += '"' + obj[key] + '"';
      once = true;
    }
    if(typeof obj[key] === 'boolean') {
      string += obj[key];
      once = true;
    }
    if(obj[key] === null) {
      string += obj[key];
      once = true;
    }
    if(typeof obj[key] === 'object') {
      output(obj[key]);
      once = true;
    }
    
    
  }
  
  string += '}';
  return String(string);
}
  
}

 
};




