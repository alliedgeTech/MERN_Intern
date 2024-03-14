// console.log("I am from DOM2.js file");

// let ans = document.querySelector("p")

// console.log(ans.getAttribute("class"))


// let m = document.querySelector("h3")
// console.log(m.setAttribute("class","Deep"))



const ShowBtn=()=>{
    // alert("Are you sure !!!!!!!!!!")
    let x = document.createElement("button")
    x.innerText="Signup"
    x.setAttribute("class","btn")
    console.log(x);
    
    let c = document.querySelector("div")
    c.prepend(x)    
}