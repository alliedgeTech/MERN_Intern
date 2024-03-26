// console.log("learn about try catch");

// let a =121;
// let b= 345;

// try {
 
//  console.log("a+b:",a+c);
// } catch (error) {

//    console.log(error.message); 
// }

//---------------------Synchronous and Asynchronous-------------------

console.log("one");
// setTimeout(() => {
//     console.log("Two");
// },1000);
console.log("two");
console.log("three");

// callback hell

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("Data loaded:",dataId);
        getNextData();
    },2000);
}

getData(123,()=>{
    getData(6666,()=>{
        getData(7777,()=>{
            getData(8888)
        })
    })
})
