// For loop

// for (let i=0;i<=10;i++) {
//   console.log("Alliedge",i)
// }

// let sum=0
// for (let i=50;i<=50000;i++) {
//   sum =sum+i
// }
// console.log(sum)

// let i = 0, sum = 0;
// while (i <= 50) {
//   sum = sum + i
//   i++;
// }
// console.log(sum)


// let i = 0, sum = 0;
// do{
//   sum = sum + i
//   i++;
// }while(i<=50)
// console.log(sum);


const friend={
   name:"Alliedge",
    age:25,
    phone:1234567890,
    address:"Dhaka",
    email:"alliedge@gmail.com",
    salary:25000,
    AbortController:false,
    job:"Web Developer",
    position:"Senior",
    company:"Alliedge",
    website:"http://alliedge.com",
    URL:"http://abc.com"
}

// for (let i in friend) {
//   console.log(friend[i])
// }

let companyName="Alliedge Technologies"
let sNO=1
for (let i of companyName)
{
  console.log(i)
  sNO++;
}
console.log(sNO)