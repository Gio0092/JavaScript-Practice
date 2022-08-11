let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el')


inputBtn.addEventListener('click', function(){ 
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++){
        // NORMAL STRING
    //    listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
       // TEMPLATE SCREEN
       listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>
       `
    }
    ulEl.innerHTML = listItems;
}
