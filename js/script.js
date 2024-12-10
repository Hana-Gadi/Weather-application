let searchInput =document.querySelector("#searchInput");
let SearchBtn=document.querySelector("#findBtn");

// let forecastData=[];
// searchInput.addEventListener("input",function(){
//     getCity(searchInput.value);
// })

// getCity("london")
//To Search for cities  
async function getCity(city){
    let response =await fetch(`https://api.weatherapi.com/v1/search.json?key=a1fcb6b1dc374b6384d132302240912&q=${city}`);
    if(response.ok){
        let data = await response.json();
        let cityData=data[1].name;
        console.log(cityData);
        getForecast(cityData);
    }
}


// getForcast("cairo")
//To get Weather forcast for 3 days
async function  getForecast(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a1fcb6b1dc374b6384d132302240912&q=${city}&days=3`)
    if(response.ok){
        let data = await response.json();
        forecastData=data.forecast;
        // console.log(forecastData);
        // console.log(forecastData.forecastday[0].date);
        // console.log(forecastData.forecastday[0].day.maxtemp_c);
        // console.log(forecastData.forecastday[0].day.condition.text);
        // console.log(forecastData.forecastday[0].day.condition.icon);
        // forcastData=data.forecast.forecastday[0].date;
        displayData(forecastData.forecastday);
        // getDate();
        //console.log()
        // displayData();
    }
}

//Date function
function getDate(){
    let myday=new Date(allData);
    let day=getDayName(myday);
    console.log(day)

}


//toconvert date to day Function
function getDayName(dateString) {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()]; // Get the day index and retrieve the name
}


//To Get Current Weather for the search city
// async function getCurrentWeather(city){
//     let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1fcb6b1dc374b6384d132302240912&q=${city}`);
//     if(response.ok){
//         let data = await response.json();

// }
// }

function displayData(arr){
    let container="";
    for(i=0;i<arr.length;i++){
        container +=`
           <div class="col-md-4">
          <div class="card footerGround" style="width: 18rem;">
            <div class="card-body ">
              <h5 class="card-title txtColor bg-black">Monday</h5>
              <p class="card-subtitle mb-2 text-muted">mmmmmmm</p>
              <div class=" d-flex">
                <h6 class="card-text fw-bold fs-1 txtColor">${arr[i].day.maxtemp_c}</h6>
                <img src="./images/113.png" alt="">
              </div>
              <img src="${arr[i].day.condition.icon}" alt="">
              <p class="text-primary">${arr[i].day.condition.text}</p>
            </div>
          </div>
        </div>
           `
    }

    document.getElementById("rawData").innerHTML=container;
}



