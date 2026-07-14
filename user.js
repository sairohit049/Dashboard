async function getdata() {
    let con=document.getElementById("container")
    let res=await fetch("https://dashboard-vi12.onrender.com/cars")
    let data=await res.json()
    data.forEach(ele => {
        let x=document.createElement("div")
        x.innerHTML=`
        CAR NAME :${ele.name}<br>
        <img src="${ele.image}"><br>
        Price : ${ele.price}
        `
        con.append(x)
    });
}
getdata()