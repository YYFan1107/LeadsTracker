const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage    – use: JSON.parse()
// Store it in a variable called leadsFromLocalStorage
// Log out the variableNe
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage;
   renderLeads();
}

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value);
   inputEl.value = "";
   // Save the myLeads array to localStorage
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   renderLeads();
   // To verify that it works:
   console.log( localStorage.getItem("myLeads") );
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