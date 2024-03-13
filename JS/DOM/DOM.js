console.log(document.body)

// console.dir(document.body)

document.getElementById("gm").style.background = "black"
document.getElementById("gm").style.color = "#9c9c9c"



const timefnxnoon=()=>{
    document.getElementById("gm").innerText = "Good Afternoon Everyone"
}
const timefnxnight=()=>{
    document.getElementById("gm").innerText = "Good Night Everyone"
}
const viewChange = ()=>{
    let ele = document.getElementsByClassName("head-class")[2].innerText = "Mr.Deep Panchal"    
    document.getElementsByClassName("head-class")[2].style.color = "white"
    document.getElementsByClassName("head-class")[2].style.background="black"
    document.getElementsByClassName("head-class")[2].style.padding="10px"
    document.getElementsByClassName("head-class")[2].style.borderRadius="10px"
}
const RemoveChange =()=>{
    document.getElementsByClassName("head-class")[2].innerText="Mr . Devarshi"
    document.getElementsByClassName("head-class")[2].style.color="black"
    document.getElementsByClassName("head-class")[2].style.background="white"
}

