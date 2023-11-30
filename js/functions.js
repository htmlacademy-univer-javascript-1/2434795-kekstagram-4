function check_length_string(str, length){
  if (str.length <= length){
    return true;
  }
  return false;
}

function is_palindrome(str){
  return str === str.split('').reverse().join('');
}

