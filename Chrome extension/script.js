let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const delBtn = document.querySelector('#del-btn');
const tabBtn = document.querySelector('#tab-btn');


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        // NORMAL STRING
        //    listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        // TEMPLATE STRING
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>
       `
    }
    ulEl.innerHTML = listItems;
}


inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
})

tabBtn.addEventListener('click', function () {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs){
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        });
})

delBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})


