// function GetInfo(){
//     const newInput = document.getElementById("cityInput");
//     const newName = document.getElementById("cityName");
// newName.innerHTML = "--"+newInput.value+"--";
var citySerach = 'Beijing';
// var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?q='+'&appid=32ba0bfed592484379e51106cef3f204';

var humEl = document.getElementById('todayHumid');
var temEl = document.getElementById('todayTemp');
var winEl = document.getElementById('todayWind');
var uviEl = document.getElementById('todayUvi');

// var humEl = document.getElementById('todayHumid');
// var temEl = document.getElementById('todayTemp');
// var winEl = document.getElementById('todayWind');
// var uviEl = document.getElementById('todayUvi');

// var humEl2 = document.getElementById('todayHumid2');
// var temEl2 = document.getElementById('todayTemp2');
// var winEl2 = document.getElementById('todayWind2');
// var uviEl2 = document.getElementById('todayUvi2');

// var humEl3 = document.getElementById('todayHumid3');
// var temEl3 = document.getElementById('todayTemp3');
// var winEl3 = document.getElementById('todayWind3');
// var uviEl3 = document.getElementById('todayUvi3');

// var humEl4 = document.getElementById('todayHumid4');
// var temEl4 = document.getElementById('todayTemp4');
// var winEl4 = document.getElementById('todayWind4');
// var uviEl4 = document.getElementById('todayUvi4');

// var humEl5 = document.getElementById('todayHumid5');
// var temEl5 = document.getElementById('todayTemp5');
// var winEl5 = document.getElementById('todayWind5');
// var uviEl5 = document.getElementById('todayUvi5');


function fetchFunction(){
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
    
    
    
    
    
    
    // for (let i = 2; i < 6; i++) {
        //     const day = data.daily[i];
        //     var temWea = day.temp;
        //     var winWea = day.wind_deg;
        //    var humWea = day.humidity;
        //    var uviWea = day.uvi;
    
        //     console.log(['humEl'+i]);






        //    ['humEl'+i].textContent = humWea;
        //    ['temEl'+i].textContent = temWea;
        //    ['winEl'+i].textContent = winWea;
        //     ['uviEl'+i].textContent = uviWea;

            
        // }
        


    //     var temWea3 = data.daily.Array(2).temp;
    //     var winWea3 = data.daily.Array(2).wind_deg;
    //    var humWea3 = data.daily.Array(2).humidity;
    //    var uviWea3 = daily.Array(2).uvi;

    //    humEl3.textContent = humWea3;
    //    temEl3.textContent = temWea3;
    //    winEl3.textContent = winWea3;
    //     uviEl3.textContent = uviWea3; 

    //     var temWea4 = data.daily.Array(3).temp;
    //     var winWea4 = data.daily.Array(3).wind_deg;
    //    var humWea4 = data.daily.Array(3).humidity;
    //    var uviWea4 = daily.Array(3).uvi;

    //    humEl4.textContent = humWea4;
    //    temEl4.textContent = temWea4;
    //    winEl4.textContent = winWea4;
    //     uviEl4.textContent = uviWea4; 

    //     var temWea5 = data.daily.Array(4).temp;
    //     var winWea5 = data.daily.Array(4).wind_deg;
    //    var humWea5 = data.daily.Array(4).humidity;
    //    var uviWea5 = daily.Array(4).uvi;

    //    humEl5.textContent = humWea5;
    //    temEl5.textContent = temWea5;
    //    winEl5.textContent = winWea5;
    //     uviEl5.textContent = uviWea5; 






























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