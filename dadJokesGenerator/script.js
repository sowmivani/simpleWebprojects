const btnEl =document.getElementById("btn")
const jokeEl=document.getElementById("joke")
const apiKey="wFs/FGjvUDawxahbLIDrew==XVltUI2I20kVoTjk";
const apiUrl="https://api.api-ninjas.com/v1/dadjokes"
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
async function getJoke(){
    try {
        joke.innerText="Updating..."
    btnEl.displayed=true;
    btnEl.innerText="Loading.."
    const response=await fetch(apiUrl,options)
    const data=await response.json();
    jokeEl.innerText=data[0].joke
    btnEl.displayed=false;
    btnEl.innerText="Tell me a joke"
    //console.log(data[0].joke)
        
    } catch (error) {
        jokeEl.innerText="An error occured, try again later";
         btnEl.displayed=false;
    btnEl.innerText="Tell me a joke"

    }
    
}
btnEl.addEventListener("click",getJoke);