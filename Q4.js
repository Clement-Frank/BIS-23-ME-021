
let multiply= [20]
     
      function double(element, index, array){
       array[index] = element * 2;
     }
      function display(element){
        console.log(element);
        
    
    multiply.forEach(double);
     multiply.forEach(display);
      }