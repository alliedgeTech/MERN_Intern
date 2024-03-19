let button = document.querySelector("#theme")
let defaulttheme = "light"
let body = document.querySelector("body")
button.addEventListener('click', () => {
    if (defaulttheme === "light") {
        body.classList.add("dark")
        body.classList.remove("light")
        defaulttheme = "dark"
    }
    else {
        body.classList.add("light")
        body.classList.remove("dark")
        defaulttheme = "light"
    }
})
