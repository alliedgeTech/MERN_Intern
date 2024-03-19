let showform = document.querySelector("#showform")

 let hideform = document.querySelector("#hideform")

let submitbutton = document.querySelector("#showform")

let myform = document.querySelector('#myform');
myform.style.display = 'none';

// showform.onclick =()=>{
//     let myform = document.querySelector('#myform');
//     myform.style.display = 'block';
// }

// hideform.onclick =()=>{
//     let myform = document.querySelector('#myform');
//     myform.style.display = 'none';
// }

function a ()
{
  showform.addEventListener('click',()=>{
    console.log("BBBBBBBBBBBBBBBBBBBBBBB");
})

}


showform.addEventListener('click',()=>{
    console.log("AAAAAAAAAAAAAAAAAAA");
})
showform.addEventListener('click',()=>{
    console.log("CCCCCCCCCCCCCCCCCCCC");
})


showform.addEventListener('click',()=>{
    console.log("DDDDDDDDDDDDDDDDDDDD");
})
showform.removeEventListener('click',a)
