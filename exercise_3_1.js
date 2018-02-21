function palindrome(word) {
  if (word.length <= 1) return true

  if (word[0] == word[word.length-1]) {
    return palindrome(word.slice(1,-1))
  }
  else return false
}


// test
console.log(`test palindrome 1: -> ${palindrome('noon')}`)
console.log(`test palindrome 2: -> ${palindrome('civic')}`)
console.log(`test palindrome 3: -> ${!palindrome('test')}`)
