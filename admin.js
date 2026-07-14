async function fetchdata() {
    let res=await fetch("https://dashboard-1-backend-dcy8.onrender.com/cars")
    try {
        if(!res.ok){
            console.log("re-verify the code");
            
        }
        let data=await res.json();
       cars(data)
        
    } catch (error) {
        
    }
}
window.addEventListener("DOMContentLoaded",fetchdata)
function cars(data){
    let main=document.getElementById("main")
    let x=document.createElement("div")
    x.innerHTML=data.map((ele)=>{
       return `
    <div class="card">
    <p><b>Car Name :</b> ${ele.name}</p>
    <img src="${ele.image}">
    <p><b>Price :</b> ${ele.price}</p><br>

    <button id="delete${ele.id}">Delete</button>
    <button id="edit${ele.id}">Edit</button>
    </div>
`
    }).join("")
    main.append(x)
    data.forEach(ele => {
        let del=document.getElementById(`delete${ele.id}`)
        let edit=document.getElementById(`edit${ele.id}`)
        del.onclick=()=>{
            deletedata(ele.id)
        }
        edit.onclick=()=>{
        aquiredata(ele.id)
            
        }
        
    });
    
}
async function aquiredata(id){
let sid=document.getElementById("id")
let sname=document.getElementById("name")
let slink=document.getElementById("link")
let sprice=document.getElementById("price")
let res=await fetch(`https://dashboard-1-backend-dcy8.onrender.com/cars/${id}`)
try {
    if(!res.ok){
        console.log("success");
        
    }
    let data=await res.json();
    sid.value=data.id;
    sname.value=data.name;
    slink.value=data.image;
    sprice.value=data.price;
} catch (error) {
    console.log(error);
    
}
}
//deleting the data
async function deletedata(id){
    let res=await fetch(`https://dashboard-1-backend-dcy8.onrender.com/cars/${id}`,{"method": "DELETE"})
    try {
        if(!res.ok){
            console.log("mistake found");
            
        }
        alert("succes")
    } catch (error) {
        console.log(error);
        
    }
}

async function editdata(){
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let link=document.getElementById("link").value;
    let price=document.getElementById("price").value;
    let obj={
        "name":name,
        "image":link,
        "price":price
    }
    let res=await fetch(id?`https://dashboard-1-backend-dcy8.onrender.com/cars/${id}`:`https://dahttps://dashboard-1-backend-dcy8.onrender.com/cars`,{
        "method":id?"PUT":"POST",
        "headers":{
            "content-type":"application/json"
        },"body":JSON.stringify(obj)
    })
    try {
        if(!res.ok){
            console.log("success");
            
        }
        alert("done")
    } catch (error) {
        console.log(error);
        
    }
    
}
async function newdata(){
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let link=document.getElementById("link").value;
    let price=document.getElementById("price").value;
    let obj={
        "id":id,
        "name":name,
        "image":link,
        "price":price
    }
    let res=await fetch(`https://dashboard-1-backend-dcy8.onrender.com/cars/${id}`,{
        "method":"PUT",
        "headers":{
            "content-type":"application/json"
        },"body":JSON.stringify(obj)
    })
    try {
        if(!res.ok){
            console.log("success");
            
        }
        alert("done")
    } catch (error) {
        console.log(error);
        
    }
    
}