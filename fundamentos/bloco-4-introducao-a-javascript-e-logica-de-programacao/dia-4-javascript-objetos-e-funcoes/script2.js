
//exercicio 1

function Palindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(Palindrome('arara'));
  console.log(Palindrome('desenvolvimento'));


  //exercicio 2

  