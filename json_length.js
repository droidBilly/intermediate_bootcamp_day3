function jsonlength(data) {
    return data.map(
      function(obj) {
          if (typeof(obj) == 'object') return jsonlength(obj);
          else if (typeof(obj) == 'string') return obj.length+2; //+2 beacuse of the quotes
          else if (typeof(obj) == 'number') return obj.toString().length;
      }
    ).reduce((a,b) => a + b, 0) + data.length-1 + 2 //data.length -1 because of commas between elements and +2 because of the square brackets from elements
}

// tests
console.log('test 1:', jsonlength([5 ,'a']) === JSON.stringify([1,'a']).length)
var testdata = [1, 2, 309634, ['hello', -42, 'foo bar'], 5]
console.log('test 1:', jsonlength(testdata) === JSON.stringify(testdata).length)

console.log(JSON.stringify(testdata).length)
console.log(jsonlength(testdata))
