setInterval(function (){$('#currentTime').text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));}, 1000);
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
    

fetchFunction()