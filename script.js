//load dom first
document.addEventListener("DOMContentLoaded", (e)=>{
    loginAlert()
    listHomes()
    addHome()
    displayComments()
})

//General utilities
const navBar = document.querySelector(".navBar")
const mainDiv = document.querySelector(".main-container")
const listDiv = document.querySelector(".homes-listing")
const displayDiv = document.querySelector(".display-home-details")
const addHomeDiv = document.querySelector(".add-homes")

const ul = document.createElement("ul")
listDiv.appendChild(ul)

const homesArray = "https://ntwigamartin.github.io/Casa-Kenya-data/db.json"
let p2 = document.createElement("p")
const loginForm = document.getElementById("login")
const addDetailsForm = document.getElementById("add-details")

//Login alert
function loginAlert () {
     loginForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        //let userDetails = e.target.user_email.value
        addDetailsForm.style.display = 'block';
        alert("Login successful")
        
        loginForm.reset()
     })
}


//Get homes
function listHomes () {
    fetch(homesArray)
    .then(res=>res.json())
    .then(data=>{
        data.homes.forEach(home => {
            let li = document.createElement("p")
            li.innerHTML = home.name
            ul.appendChild(li)

            li.addEventListener(("click"), (e)=>{
                displayDiv.appendChild(p2)
                p2.innerHTML = `<p>Description:${home.description}</p>  
                                <p>Location: ${home.location}</p>  
                                <p>Rent Amount: ${home.rent_amount}</p>  
                                <p>Available Units: ${home.available_units}</p> 
                                <p>Contacts: ${home.contacts}</p>  <br>
                                <button>Likes:${home.likes}</button>`


                let btn = document.querySelector("button")
                btn.addEventListener(("click"), (e)=>{
                    btn.innerHTML = `Likes:${home.likes}`
                    home.likes++
                })
            })
            
        });
    })
}

//submit new home details
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
        let contacts = e.target.contacts.value
        
        p2.innerHTML = `<p>Description:${description}</p> 
                        <p>Location:${location}</p> 
                        <p>Rent Amount:${rentAmount}</p> 
                        <p>Available Units:${availableUnits}</p> 
                        <p>Contacts:${contacts}</p> `
                                             
        displayDiv.appendChild(p2)
        addDetailsForm.reset()
        
    })
}


//Comments
function displayComments () {
    const commentsForm = document.getElementById("comments")
    let divComment = document.querySelector(".display_comments")
    commentsForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        let comments = e.target.comments_area.value
        let p = document.createElement("p")
        p.innerHTML = comments
        divComment.appendChild(p)

        commentsForm.reset()
    })
}