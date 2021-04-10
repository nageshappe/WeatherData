// fetch = require('node-fetch')
function display(){
  
  var city =document.getElementById("city").value
console.log(city)
var apiKey = 'd76ce6e4f25efbe1968fa2f568de2277'
//  var url =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,hourly&units=metric&appid=${apiKey}`         
var base = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
 

fetch(base)
.then((response)=>{
  return response.json()
}).then((data)=>
{
 
      // var city = document.getElementById("temp")
      // table = document.createElement("TABLE");
      // table.border="1"
      // console.log(data)
      // var row = table.insertRow(-1);
      // var cell1 = row.insertCell(-1)
      // var cell2 =  row.insertCell(-1)
      // cell1.innerHTML="Cityname"
      // cell2.innerHTML = "Temperature"
      //  row1 = table.insertRow(-1)
      //  cell1 = row1.insertCell(-1)
      //  cell1.innerHTML =  data.name 
      //  cell2 = row1.insertCell(-1)
      //  cell2.innerHTML = data.main.temp
      // tableDiv = document.getElementById("temptable")
      //   tableDiv.append(table)

      displayWeather(data)

})
  
}
function displayWeather(data)
{
  var description = data.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = data.main.temp + '&deg;';
	document.getElementById('location').innerHTML = data.name;
	var icon =  data.weather[0].icon
  console.log(icon)
  var iconurl =  "https://openweathermap.org/img/w/" + icon + ".png"
  document.getElementById("wicon").src= iconurl
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }  
  

}

// }
