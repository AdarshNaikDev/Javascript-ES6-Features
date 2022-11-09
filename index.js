function staircase(n) {
    
  // want to declare a variable that will hold the final output that we will print 
  let output = ''
  
  for (let i = 1; i <= n; i++) {
  
      for (let s = n - 1; s >= i; s--) {
          output += ' '
      }
      
      
      for (let h = 1; h <= i; h++) {
          output += '#'
      }
     
      output += "\n"
     
  }
 
  console.log(output)
}