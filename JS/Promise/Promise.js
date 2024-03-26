console.log("promise");

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am Promise");
//     resolve("Deep panchal");
//      reject("something went wrong"); 
// });



// let promise = new Promise((resolve,reject)=>{
//     console.log("I am Promise");
//    setTimeout(()=>{
//        resolve("sucesss");
//    },5000)
// });

const getRetriveData =  ()=>{
     return new Promise((resolve,reject)=>{
        console.log("Pending");
     setTimeout(()=>{
       resolve("sucesss")
        //  reject("failled")
     },5000)
     })
}
let ans = getRetriveData();
console.log(ans);
 ans.then(()=>{
    console.log("promise sucessfully resolved");
 }).catch(()=>{
    console.log("promise failled");
 })


