const inputBox = document.getElementById("input-in");
const listContainer = document.getElementById("list-container");
function Addme() {
    const todo = inputBox.value;
    if(todo === '') {
        alert("You must write something")
    
    } else {
        let li = document.createElement("li");
        li.innerHTML = todo
        console.log(todo)  
     listContainer.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span); 
        

    }
    todo ="";
}

listContainer.addEventListener("click", e=> {
    if(e.target.tagName === "LI"){
        e.target.element.style.opacity = "50%";
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();

    }
},false);

// var a = ['3','5','11','12','24']

// // const b = a.join('2')
// // console.log(b)
// const c = a.map( function binary(x){
//     return x * 2;


// })
// console.log(a ,typeof a);

const data = [
    {
        Name: "zohaib",
        Number : 87837,
        Address: "hyd"
    }
    
]

const valuedata = data.map(item => ({
    Names: item.Name,
    Numbers : item.Number,
    Addresses: item.Address
}));
console.log(valuedata);