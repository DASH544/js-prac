const apiKey="765a0ec91414706da26d7fbdb4ea60c9"


const fetchData=async ()=>
    {
        const city=document.querySelector("#input-city").value
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
        const data=await response.json()
        console.log(data)
        document.querySelector("#city-temp").textContent=Math.floor(data.main.feels_like) + " C"
        document.querySelector("#city-name").textContent=data.name
        document.querySelector("#humidity").textContent=data.main.humidity + " %"
        document.querySelector("#wind").textContent=data.wind.speed + " kmph"
    }
