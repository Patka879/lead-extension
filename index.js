"use strict"

let input = document.getElementById("input-el")
const button = document.getElementById("button-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


button.addEventListener("click", function() {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    addToTheList()
    console.log(localStorage.getItem('myLeads'))
})

function addToTheList() {
    let listItem = ""

    for (let i = 0; i < myLeads.length; i++) {
        listItem += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItem
}