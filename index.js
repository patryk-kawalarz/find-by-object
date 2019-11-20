Array.prototype._find = function(obj) {
  let array = [...this];
  
  if(!array.length || !Object.entries(obj).length) return [];
  
  Object.keys(obj).forEach((key) => {
    array = array.find((item) => item[key] === obj[key]);
  });
  
  return array;
};

// [{name: 'BBB'}, {name: 'Patryk'}]._find({name: 'Patryk'})
// { name: 'Patryk' }
