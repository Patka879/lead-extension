"use strict"

let myLeads = []
let oldLeads =[]
const input = document.getElementById("input-el")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItem = ""

    for (let i = 0; i < leads.length; i++) {
        listItem += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItem
}

saveButton.addEventListener("click", function() {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})

deleteButton.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})