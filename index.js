const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage;
   renderLeads();
}

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value);
   inputEl.value = "";
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   renderLeads();
});

tabBtn.addEventListener("click", function() {
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads();
   });
});

deleteBtn.addEventListener("click", function() {
   myLeads = [];
   localStorage.removeItem("myLeads");
   renderLeads();
});

function renderLeads() {
   let listItems = "";
   for (let i = 0; i < myLeads.length; i++) {
      listItems += `
         <li>
            <a target="_blank" href="${myLeads[i]}">
               ${myLeads[i]}
            </a>
         </li>`;
   }
   ulEl.innerHTML = listItems;
}