"use strict"

let input = document.getElementById("input-el")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderList()
}

saveButton.addEventListener("click", function() {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()
})

deleteButton.addEventListener("click", function() {
    myLeads = []
    ulEl.innerHTML = ""
    localStorage.clearItem()
})

function renderList() {
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