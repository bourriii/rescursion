//ex1
function factorial(n) {
    if (n === 0) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  
  
  
  
  //ex2
  function sumArray(arr) {
      
      if (arr.length === 0) {
        return 0;
      }
      
      return arr[0] + sumArray(arr.slice(1));
    }
    
    console.log(sumArray([7, 2, 3, 4, 5])); 
  
  
  //ex 3
  
    function countDigits(n) {
  
      const strn = n.toString();
    
      
      if (strn.length === 0) {
        return 0;
      }
      else{
      return strn.length}
    }
    
    console.log(countDigits(5255553456)); 
  
  
    //ex4
  
  function reverseSequence(n) {
      let result = [];
  
      for (let i = n; i >= 1; i--) {
          result.push(i); 
      }
      return result;
  }
  
  console.log(reverseSequence(5)); 
  