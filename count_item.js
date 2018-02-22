function jsoncount(data) {
  return data.map(
    function(obj) {
        if (typeof(obj) == 'object') return jsonlength(obj);
        else if (typeof(obj) == 'string') return 
        else if (typeof(obj) == 'number') return obj.toString().length;
    }
  )
}

// tests
console.log('test 1:', jsoncount([1,'a', []]))
