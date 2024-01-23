let home = document.getElementById("homepage")
let services = document.getElementById("services")
let FORM = document.getElementById("FORM")
let homelink = document.getElementById("homelink")
let formlink = document.getElementById("formlink")
let servicelink = document.getElementById("servicelink")
home.style.display = "block"
services.style.display = "none"
FORM.style.display = "none";


formlink.addEventListener("click", () => {
    home.style.display = "none"
    services.style.display = "none"
    FORM.style.display = "block";
})

servicelink.addEventListener("click", () => {
    home.style.display = "none"
    services.style.display = "block"
    FORM.style.display = "none";
})
homelink.addEventListener("click", () => {
    home.style.display = "block"
    services.style.display = "none"
    FORM.style.display = "none";
});