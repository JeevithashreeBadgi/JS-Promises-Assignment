console.log("working");

//Problem 1


//example 1
function Do(){

    console.log("Do func executed");// in Do() func, log firstly executed by compiler. and then compiler go to next.
    after(); // here in DO() , we call the after() to execute. after() function only executed after the Do() is done. this is callback function
 }
 function after(){
     console.log("after function executed");
 }
 
 Do(); // here we call the Do() function to be execute.
 
 
 //Problem 2
 

 function printNums(){
     setTimeout(()=>{
         console.log("1");
         setTimeout(()=>{
             console.log("2");
             setTimeout(()=>{
                 console.log("3");
 
                 setTimeout(()=>{
                     console.log("4");
 
                     setTimeout(()=>{
                         console.log("5");
                       setTimeout(()=>{
                           console.log("6");
 
                           setTimeout(()=>{
                               console.log("7");
                              
                                   console.log("End of Callback hell");
                         
                           },7000)
                       },6000)
                     },5000)
                 },4000);
             },3000);
         },2000);
     },1000);
 }
 
 printNums(); // calling the function .
//  printNum() is made up of set of callback functions which r called after some seconds/previous one is executed. but here the code structure is completely messy to see and hard to find the error while debuging. thats why it is called as callback hell.
 //hard to find where exactly we r in those callback functions.
 //this is worst code/bad structure of Callback fuctions. 
 
 
 
 //Problem 3
 
 let print =new Promise((resolve,reject)=>{
     
     setTimeout(()=>{
         resolve(console.log("1"))
     },1000)
    
 }).then( ()=> new Promise((resolve,reject)=>{
 
    setTimeout(()=>{
     resolve(console.log("2"))
    },2000)
 
 }) ).then( ()=> new Promise((resolve,reject)=>{
 
    setTimeout(()=>{
     resolve(console.log("3"))
    },3000)
 
 }) ).then(()=> new Promise((resolve,reject)=>{
    
     setTimeout(()=>{
         resolve(console.log("4"))
     },4000)
 
 })).then(()=> new Promise((resolve,reject)=>{
    
     setTimeout(()=>{
         resolve(console.log("5"))
     },5000)
 })).then( ()=> new Promise((res,rej)=>{
    
     setTimeout(()=>{
        res(console.log("6"))
     },6000)
 
 })).then(()=> new Promise((res,rej)=>{
     
     setTimeout(()=>{
         res(console.log("7"))
         console.log("end of promises");
     },7000)
 }));
 
 
 //Problem 4 

 const getPromise =(val) => {
 
    return new Promise((resolve,reject) =>{
 
     if(val =="yes"){
         resolve(val)
     }else{
         reject("Promise Rejected")
     }
    })
 }
 
 getPromise("ye").then((data)=>{
     console.log(data);
 }).catch((err)=>{
     console.log(err);
 })
 //prints Promise Rejected 
 
 
 // Problem 5
 function a(){
 
     console.log("function a executed.."); //here this log is first executed 
     setTimeout(function b(){ //then function b is executed with setTimeout as 2 seconds. 
           console.log("function b executed after 2 seconds"); //after the 2 sconds ,this function b's log will be execute by function a().
     },2000);
 };
 
 a();

 


 //
 async function getData(){ //async key word tries to execute continuesly until all the task to be done/executed.
         
     console.log("function started.."); 
     let res = await fetch("https://api.github.com/users"); // await key word,it is used to wait for a seconds until the data has been fetched.
     console.log("res has been fetched from link");
     console.log("Converting....");
     let users = await res.json(); // waiting for seconds to format the users data as JSON.
     console.log(users); // here users data is not fetched/formatted as json ,so it jumped to next line and prints  "fetching..."becoz users data not formated as json yet.
  
     console.log("fetched"); //it will be execute beocz users data has not been fetched.
 } 
 
 console.log("before calling the function");
 getData();
 console.log("after calling the function");