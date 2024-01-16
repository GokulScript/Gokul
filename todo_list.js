

let UL = document.getElementById("listContainer"); 

let MyDiv = document.createElement("div");
MyDiv.classList.add("TaskContainer");








function NewTask() {
    //let unchecked = '<i class="fa-solid fa-square fa-2xl"></i>';
    let unchecked=document.createElement('i');
    unchecked.classList.add("fa-solid", "fa-square", "fa-2xl");


   
    unchecked.addEventListener('click',handle);

 //   let checked = '<i class="fa-solid fa-square-check fa-2xl "></i>';
    let checked=document.createElement('i');
    checked.classList.add("fa-solid","fa-square-check","fa-2xl");

   // let X = '<i class="fa-solid fa-square-xmark fa-2xl"></i>';
   let X=document.createElement('i');
   X.classList.add("fa-solid","fa-square-xmark","fa-2xl");
   X.addEventListener('click',deletes);

   
    let MyDiv = document.createElement("div");
    MyDiv.classList.add("TaskContainer");

    let input = document.getElementById('inputText');
    /*let UL = document.getElementById("listContainer"); */




    


    if (input.value === "") {
        alert("first enter");
    } else {
        let textSpan = document.createElement("span");
        textSpan.classList.add("hello");
        textSpan.textContent = input.value;



        MyDiv.appendChild(unchecked);  // Append the unchecked icon
        MyDiv.appendChild(textSpan);
        MyDiv.appendChild(X);

      // MyDiv.append(textSpan);

       //MyDiv.innerHTML = unchecked.outerHTML + MyDiv.innerHTML + X.outerHTML;
  
        UL.appendChild(MyDiv);

        
       
   
        input.value = "";
        

        saveData();

       

    }
}

function handle(){
    this.classList.toggle("fa-square");
    this.classList.toggle("fa-square-check");
    console.log("the icon function is executing")
    saveData();


}
var element=document.getElementsByClassName("fa-solid fa-square fa-2xl");
for(var i=0;i<element.length;i++){
    element[i].addEventListener('click',handle);
}

function deletes(){
        this.parentElement.remove();
        saveData();

}


function saveData(){
    localStorage.setItem("data",UL.innerHTML);
}
function showTask(){


  
    UL.innerHTML=localStorage.getItem("data") || "";



    var element=document.getElementsByClassName("fa-solid fa-square fa-2xl");
    for(var i=0;i<element.length;i++){
        element[i].addEventListener('click',handle);
    }

    var deleteIcon=document.getElementsByClassName("fa-solid fa-square-xmark fa-2xl");
    for(var j=0;j<deleteIcon.length;j++){
        deleteIcon[j].addEventListener('click',deletes);
    }

}


showTask();



