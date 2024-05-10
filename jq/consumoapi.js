
const btn = document.getElementById("notas")
btn.addEventListener("clic",()=>{
    console.log("Fetch API");

    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
        .then((Response)=>response.json())
        .then((data)=>response.json(data));
        


});