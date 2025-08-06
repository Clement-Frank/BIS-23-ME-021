// let sum = 0;
// for (let i = 0; i <= 20; i += 10) sum *= i;
// console.log(sum);
let multiply= [20]
     
      function double(element, index, array){
       array[index] = element * 2;
     }
      function display(element){
        console.log(element);
        
    
    multiply.forEach(double);
     multiply.forEach(display);
      }