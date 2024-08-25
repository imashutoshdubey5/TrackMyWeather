const inputBox= document.querySelector(".input");
const button= document.querySelector(".btn");
const weatherImage= document.querySelector(".weather-img");
const tempreature= document.querySelector(".temp");
const description= document.querySelector(".desp");
const humidity= document.getElementById("humidity");
const windSpeed= document.getElementById("windSpeed");
const notFound=document.querySelector(".notFound");
const weatherBody=document.querySelector(".weather-body")
const coder=document.querySelector(".coder");
const codername=document.querySelector(".codername");
const header=document.querySelector(".header");


if(inputBox.value === '')
     {
          notFound.style.display="none";
          weatherBody.style.display="none";
          header.style.display="flex";         
          coder.style.display="none";
          codername.style.display="none";   
     }

async function checkWeather(city){
const id="864eea55aec848e80d877e68846e2d71";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`;
const raw= await fetch(url);
const weatherData= await raw.json();
console.log(weatherData);

//If there is no input

// If data is not found and input is not found and who is developer.............

if(weatherData.cod === `404`)
{

     if( city  === `developer`)
          { 
            notFound.style.display="none";
            weatherBody.style.display="none";
            header.style.display="none";         
            coder.style.display="flex";
            codername.style.display="flex";
            return;
          }
     else
          {
          notFound.style.display="flex";
          weatherBody.style.display="none";
          console.log("error");
          return;   
          }

}
 
// showing data according to the city.................................
console.log("run");
notFound.style.display="none";
weatherBody.style.display="flex";
tempreature.innerHTML=`${Math.round(weatherData.main.temp- 273.15)}°C
`;
description.innerHTML=`${weatherData.weather[0].description}`;
humidity.innerHTML=`${weatherData.main.humidity}%`;
windSpeed.innerHTML=`${weatherData.wind.speed} KM/H`;


//Images according to the data.............. 
switch (weatherData.weather[0].main) {
     case 'Clouds':
          weatherImage.src= "assets/cloud.png";
          break;
     case 'Mist':
          weatherImage.src= "assets/mist.png";
          break;
     case 'Clear':
          weatherImage.src= "assets/clear.png";
          break;
     case 'Rain':
          weatherImage.src= "assets/rain.png";
          break;
     case 'Snow':
          weatherImage.src= "assets/snow.png";
          break;
          
}

}

button.addEventListener('click',()=>{
     checkWeather(inputBox.value);
     
})




