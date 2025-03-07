// task-1

function sayHello(){
    console .log(" Hello, World!")
  }
  sayHello()
  
  // task-2
  
  function displayWarning(){
    console .log("Warning! System Overload!")
  }
  displayWarning()
  
  // task-3
  
  function printStatus(){
    console .log(" System Status: Active")
  }
  printStatus()
  
  // task-4
  function initialize (){
      console .log(" Initialization Complete.")
      shutdown()
  }
  function shutdown(){
      console.log("System Shutting Down…")
  }
  initialize ()
  
  // task-5
   
  function startProcess  (){
      console .log(" process started")
      endProcess()
  }
  function endProcess(){
      console.log("process ended")
  }
  startProcess ()
  
  // task-6
  function greetUser(name){
      console.log("hello",name)
  }
  greetUser("pavani")
  
  // task-7
  function calculateSum(num1,num2){
      console.log(num1+num2)
  }
  calculateSum(2,8)
  calculateSum(20,46)
  calculateSum(62,72)
  
  // task-8
  function countDown (){
      for(let i=5; i>0; i--){
          console.log(i)
      }
  }
  countDown()
  
  // task-9
  function checkEvenOdd (num){
      if (num%2 == 0){
          console.log("even")
      }
      else
          console.log("odd")
  }
  checkEvenOdd(26)
  checkEvenOdd(77)
  
  // task-10
  function beginSession(){
  console.log("session started")
  endSession()
  }
  function endSession() {
  console.log("session ended")
  }
  beginSession()