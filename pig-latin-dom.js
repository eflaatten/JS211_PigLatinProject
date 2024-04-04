const pigLatin = (word) => {

  // Your code here
  word = word.toLowerCase().trim()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.includes(word[0])) {
    return word + 'yay'
  }

  for(let i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){
      return word.slice(i) + word.slice(0, i) + 'ay' 
    } 
  }
  return word
}


const translatePigLatin = () => {
  event.preventDefault()
  let userInput = document.getElementById('user-input').value
  let translatedWord = pigLatin(userInput)
  document.getElementById('display-element').innerHTML = translatedWord
}

const reset = () => {
  document.getElementById('display-element').innerHTML = ''
}