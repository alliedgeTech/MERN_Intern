console.log("Async and await in JS");


// const async=hello =()=>{
//     console.log("hello Everything is fine");
// }

// hello()

// async function hello() {
//     return new Promise(()=>{
//         setTimeout(()=>{
//             console.log("hello:Zo Everything is fine");
//         },2000)
//     })   
// }
// hello()



// function FromApi(){
// console.log("Fetching data from API");
//  setTimeout(()=>{
//     console.log("Promise is Success")
//     resolve("2000")
//  },2000)
// }

// async function getData(){
//     let response = await FromApi();
//     console.log("Data is: ",response)
// }
// getData()


// Fetch API

// API_URL = "https://jsonplaceholder.typicode.com/posts";

// API  -> Application programming interface

let URL = "https://jsonplaceholder.typicode.com/posts"

let response = fetch(URL)
//  console.log(response);

console.log("Fetching data from API");

// function getData() {
//     response
//         .then((response) => {
//             console.log("Response is: ", response);
//             return response.json();
//         })
//         .then((data) => {
//             console.log("Data is: ", data);
//         })
//         .catch((error) => {
//             console.log("Error is: ", error);
//         })
// }
// getData()


async function getData() {
    console.log("Response is: ", response);
    let data = await response;
    console.log("data", data.json().PromiseState);
}
getData()
