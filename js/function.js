function checkLengthString(str, length){
  if (str.length <= length){
    return true;
  }
  return false;
}

function isPalindrome(str){
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
