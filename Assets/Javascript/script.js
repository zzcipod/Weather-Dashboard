// function GetInfo(){
//     const newInput = document.getElementById("cityInput");
//     const newName = document.getElementById("cityName");
// newName.innerHTML = "--"+newInput.value+"--";
// var citySerach = 'Shanghai';
// var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?q='+'&appid=32ba0bfed592484379e51106cef3f204';

var humEl = document.getElementById('todayHumid');
var temEl = document.getElementById('todayTemp');
var winEl = document.getElementById('todayWind');
var uviEl = document.getElementById('todayUvi');


   $("#SearchBtn").click(function(){
    inputText=$("#inputText").val();
    console.log(inputText);
    fetchFunction(inputText);
});



function fetchFunction(citySerach){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ citySerach + '&appid=32ba0bfed592484379e51106cef3f204')
.then(function(response){
return response.json()
})
.then(function(data){
    console.log(data)
    var latitude = data.city.coord.lat;
    console.log(latitude)
    var longitude = data.city.coord.lon;
    console.log(longitude)
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude + '&lon='+longitude + '&appid=32ba0bfed592484379e51106cef3f204&units=inperial') 
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data, 'second fetch')
        var temWea=data.current.temp;
        var winWea=data.current.wind_deg;
       var humWea = data.current.humidity;
       var uviWea = data.current.uvi;

       humEl.textContent = humWea;
       temEl.textContent = temWea;
       winEl.textContent = winWea;
        uviEl.textContent = uviWea;
        return data
    })
   
    .then(data => fiveDayForecast(data))
      
    
    
    function fiveDayForecast(dataObj) {
        console.log(dataObj)
        for (let index = 1; index < 6; index++) {
            $(`#day${index}Ahead`).empty();
            $(`#day${index}Ahead`).append(`<h2>${moment().add(index, 'days').format('L')}</h2>`);
            $(`#day${index}Ahead`).append(`<p>Temperature: ${dataObj.daily[index].temp.day} °F</p>`);
            $(`#day${index}Ahead`).append(`<p>Wind: ${dataObj.daily[index].wind_speed} Mph</p>`);
            $(`#day${index}Ahead`).append(`<p>Humidity: ${dataObj.daily[index].humidity}%</p>`);
            $(`#day${index}Ahead`).append(`<p>UV Index: ${dataObj.daily[index].uvi}</p>`);
        }
    }
})
}
    
    


// .then(function(data){
//     console.log(data)
//     var latitude = data.city.coord.lat;
//     console.log(latitude)
//     var longitude = data.city.coord.lon;
//     console.log(longitude)
//     fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude + '&lon='+longitude + '&appid=32ba0bfed592484379e51106cef3f204&units=inperial') 
//     .then(function(response){
//     return response.json()
//     })
//     .then(function(data){
//         console.log(data, 'third fetch')
//        var humWea = data.current.
//        humEl.textContent = humWea;



// function disPlaytime(){
//     const timElement = document.getElementById('currentTime');
//     const currentTime = new Date();
//     timElement.innerText = currentTime;

// }

// disPlaytime()





// function getLocations(){
//     const getGeoLocal = navigator.geolocation.getCurrentPosition(
//         function (position){
//             console.log (position)
//             localStorage.setItem('latitude',position.coords.lat)
//             localStorage.setItem('longtutude',position.coords.lon)
//         }
//     );
//     console.log(getGeoLocal)
    
//     let localLoc = JSON.parse(localStorage.getItem('location'));
//     if (localLoc ===null ){
//         localLoc= []
//     } else {
//     console.log(localLoc)
//     }
//     return localLoc;
// }

// getLocations();

// $("#SearchBtn").click(function(){
//     inputText=$("#inputText").val();
//     SearchLink(inputText);
// });

// function SearchLink(searchSource){
    
//     fetch(SearchUrl)
//     .then(response => response.json())
//     .then(data => WeatherSearchFun());

// }




// fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
// .then(response => response.json())
// .then(data => {

//     // Getting Max and Min

//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
//         //Number(1.3450001).toFixed(2); // 1.35
//     }

//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
//     }




// // Getting Weather Icons
// for (i= 0; i<5; i++){
//     document.getElementById("img"+(i+1)).src = "http:openweathermap.org/img/wn/"+
//     data.list[i].weather[0].icon
//     +".png";
// }
// //
// console.log(data)

// } )

// .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
// }

// function DefaultScreen (){
//     document.getElementById("cityInput").defaultValue = "Shanghai";
//     GetInfo();
// }

// var d =new Date();
// var weekday=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// function CheckDay(day){
//     if(day+d.getDay()>6){
//         return day + d.getDay()-7;
//     }
//     else{
//         return day+d.getDay();
//     }   
//     }

//     for (i=0; i<5;i++){
//         document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)]
//     }
fetchFunction()