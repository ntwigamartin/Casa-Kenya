//load dom first
document.addEventListener("DOMContentLoaded", (e)=>{
    listHomes()
})

//General utilities
const navBar = document.querySelector(".navBar")
const mainDiv = document.querySelector(".main-container")
const listDiv = document.querySelector(".homes-listing")
const displayDiv = document.querySelector(".display-home-details")
const addHomeDiv = document.querySelector(".add-homes")
const ul = document.createElement("ul")
const homesArray = "http://localhost:3000/homes"

//Get homes
function listHomes () {
    fetch(homesArray)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}
