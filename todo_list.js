const inputBox=document.getElementById("input_value");
const list_container=document.getElementById("list_container");



function AddTask(){
    if(inputBox.value===""){
        alert("Enter your task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list_container.appendChild(li)
        let img=document.createElement("img")
        img.src="/images/x.jpg";
        li.appendChild(img);
    }
    inputBox.value="";
    saveData();
}
list_container.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function  saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}
function showTAsk(){
    list_container.innerHTML=localStorage.getItem("data");
}
showTAsk();
