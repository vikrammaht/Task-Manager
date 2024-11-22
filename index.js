// const inputBox = document.getElementById("inputBox");
// const listContainer = document.getElementById("listContainer");
// const AddTask = document.getElementById("AddTask");


// function addTask(){
//     if( inputBox.value === ''){
//         alert("You must enter task");
//     }
//     else{
//         let li =document.createElement("li");
//         li.textContent = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHtml = "\u00d7";
//         li.appendChild(span);
//     }

//      inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", (element)=>{
//     if(element.target.tagName === "LI"){
//         element.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(element.target.tagName === "SPAN"){
//         element.target.parentElement.remove();
//         saveData();

//     }
// }, false);

// inputBox.addEventListener("keydown", element =>{
//     if(element.key === "Enter"){
//         element.preventDefault();
//         document.getElementById("AddTask");


//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//     }

//     else if(element.target.Tagname === "SPAN"){
//         element.target.parentElement.remove();
//         saveData();
//     }


// }, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// showTask();

const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const AddTask = document.getElementById("AddTask");


function addTask() {
    if (inputBox.value === '') {
        alert("You must enter task");
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = " \u00d7 ";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", (element) => {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("checked");
        saveData()
    }
    else if (element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
        saveData()
    }
}, false);

inputBox.addEventListener("keydown", element => {
    if (element.key === "Enter") {

        element.preventDefault();
        document.getElementById("Addtask");

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    else if (element.target.tagName === "SPAN") {
        element.target.parentElement.remove();
        saveData()
    }

}, false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();
