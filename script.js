//load dom first
document.addEventListener("DOMContentLoaded", (e)=>{
    loginAlert()
    listHomes()
    addHome()
})

//General utilities
const navBar = document.querySelector(".navBar")
const mainDiv = document.querySelector(".main-container")
const listDiv = document.querySelector(".homes-listing")
const displayDiv = document.querySelector(".display-home-details")
const addHomeDiv = document.querySelector(".add-homes")
const ul = document.createElement("ul")
listDiv.appendChild(ul)
const homesArray = "http://localhost:3000/homes"
let p2 = document.createElement("p")
const loginForm = document.getElementById("login")
const addDetailsForm = document.getElementById("add-details")

//Login alert
function loginAlert () {
     loginForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        let userDetails = e.target.user_email.value
        alert("Login successful")

        loginForm.reset()
     })
}

//Get homes
function listHomes () {
    fetch(homesArray)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        data.forEach(home => {
            let p = document.createElement("p")
            p.innerHTML = home.name
            ul.appendChild(p)
            
            p.addEventListener(("click"), (e)=>{
                displayDiv.appendChild(p2)
                p2.innerHTML = `<h4>Description:</h4> ${home.description} 
                                <h4>Location:</h4> ${home.location} 
                                <h4>Rent Amount:</h4> ${home.rent_amount} 
                                <h4>Available Units:</h4> ${home.available_units}`
                
            })
            
        });
    })
}

//submit home details
function addHome () {
    addDetailsForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        
        let newName = e.target.property_name.value
        let p = document.createElement("p")
        p.innerHTML = newName
        ul.appendChild(p)

        let description = e.target.description.value
        let location = e.target.location.value
        let rentAmount = e.target.rent_amount.value
        let availableUnits = e.target.available_units.value
        
        p2.innerHTML = `<h4>Description:</h4> ${description}
                        <h4>Location:</h4> ${location}
                        <h4>Rent Amount:</h4> ${rentAmount}
                        <h4>Available Units:</h4> ${availableUnits}`
                                             
        displayDiv.appendChild(p2)
        addDetailsForm.reset()
        
    })
}