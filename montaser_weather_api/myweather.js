var city;
var obj;


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function clickHere(myFunc){
    document.getElementById("container").innerText=""

city= document.getElementById("typeValue").value;

let req=new XMLHttpRequest();
req.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=085e9cd33056f583efc844c7ec4f5f72");


req.send();

req.onreadystatechange=function(){
    if(req.status==200 && req.readyState==4){
let jsonObj=req.responseText;
  obj=JSON.parse(jsonObj);
//  myFunc()

console.log(jsonObj);
console.log(obj);
console.log(obj.weather);
console.log(obj.weather[0].description);
console.log(obj.main.temp_max)



let container=document.getElementById("container")
let heading=document.createElement("h1");
container.appendChild(heading)

document.body.style.background="linear-gradient(to right, #eaeaea, #5944a3)"


heading.innerHTML=city.capitalize()+" ; "+obj.sys.country;
heading.style.color="darkblue";

showData()
};
};
};


function showData(){
    
    let mainTable= document.createElement("table");        

        let row1=mainTable.insertRow();
        
        let iconCell=row1.insertCell();
        let icony=document.createElement("img");
        let iconcode= obj.weather[0].icon;
        icony.src="http://openweathermap.org/img/w/" + iconcode + ".png";
        iconCell.appendChild(icony);
        iconCell.style.backgroundColor="#eaf0f9";
        icony.style.width="80px";
        let row1a=mainTable.insertRow();
        
        let tempCell=row1a.insertCell();
        tempCell.innerText="Temperature: ";
        tempCell.style.border="1px solid #bac8e0"
        tempCell.style.backgroundColor="darkblue";
        tempCell.style.color="yellow";

        let tempCell1=row1a.insertCell();
        tempCell1.innerText=(obj.main.temp-273.15).toFixed(0)+" °C";
        tempCell1.style.border="1px solid #bac8e0"
        tempCell1.style.backgroundColor="#34416b";
        tempCell1.style.color="#f7cb1d";
        tempCell1.style.textAlign="center";
        tempCell1.style.fontSize="22px";

        let clearvisible=row1.insertCell();
        clearvisible.innerText=obj.weather[0].description.capitalize();
        clearvisible.style.border="1px solid #bac8e0";
        clearvisible.style.fontSize="20px";
        clearvisible.style.color="white";
        clearvisible.style.backgroundColor="#0e2359";

        let row2=mainTable.insertRow();

        let humidCell=row2.insertCell();
        humidCell.innerText="Humidity: ";
        humidCell.style.border="1px solid #bac8e0";
        humidCell.style.backgroundColor="darkblue";
        humidCell.style.color="yellow";


        let humidCell1=row2.insertCell();
        humidCell1.innerText=obj.main.humidity;
        humidCell1.style.border="1px solid #bac8e0";
        humidCell1.style.backgroundColor="#34416b";
        humidCell1.style.color="#f7cb1d";
        humidCell1.style.textAlign="center";
        humidCell1.style.fontSize="22px";
        

        let row3=mainTable.insertRow();

        let pressCell=row3.insertCell();
        pressCell.innerText="Pressure: ";
        pressCell.style.border="1px solid #bac8e0"
        pressCell.style.backgroundColor="darkblue";
        pressCell.style.color="yellow";

        let pressCell1=row3.insertCell();
        pressCell1.innerText=obj.main.pressure;
        pressCell1.style.border="1px solid #bac8e0"
        pressCell1.style.backgroundColor="#34416b";
        pressCell1.style.color="#f7cb1d";
        pressCell1.style.textAlign="center";
        pressCell1.style.fontSize="22px";
  
     document.getElementById("container").appendChild(mainTable);  

}





