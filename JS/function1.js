console.log("callback function")

// const Calc = (a,b)=>{
//   console.log(a+b)
// }
// Calc(3,2)


let nums = [1,2,3,4,5,6,7,8,9,10]


// let a = nums.forEach((e)=>{
    // console.log("--->",e/2);
// })
// console.log(a);
// let a= "abc".toUpperCase()
// console.log(a);


//-----------------Map function---------------------

// let answer = nums.map((val)=>{
//    console.log(`val is : ${val} `);
//    return val * 1000
// })

// console.log("My toal summary is this :",answer);


//--------------------filter --------------------------------

// let ret = nums.filter((val)=>{
// console.log("val:",val);
//     return val >3 && val < 8 
// })
// console.log("response",ret);


//---------------------------Reduce method------------------------

// let x =[1,2,3,4,5,6,7,8], sum=0 
// for (let i=0 ; i<x.length ; i++)
// {
//      sum = sum + x[i]
// }
// console.log("Sum is : ",sum);

//  -------------------reduce method  
// let response = x.reduce((pre,next)=>{
    // return pre+next
// })
// console.log("reduce method ",(response/2));