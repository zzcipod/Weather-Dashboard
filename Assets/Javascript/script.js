function GetInfo(){
    const newInput = document.getElementById("cityInput");
    const newName = document.getElementById("cityName");
newName.innerHTML = "--"+newInput.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    // Getting Max and Min

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }




// Getting Weather Icons
for (i= 0; i<5; i++){
    document.getElementById("img"+(i+1)).src = "http:openweathermap.org/img/wn/"+
    data.list[i].weather[0].icon
    +".png";
}
//
console.log(data)

} )

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
}

function DefaultScreen (){
    document.getElementById("cityInput").defaultValue = "Shanghai";
    GetInfo();
}

var d =new Date();
var weekday=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function CheckDay(day){
    if(day+d.getDay()>6){
        return day + d.getDay()-7;
    }
    else{
        return day+d.getDay();
    }   
    }

    for (i=0; i<5;i++){
        document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)]
    }


