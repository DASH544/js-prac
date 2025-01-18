const img1=document.getElementById("img-poki");



async function fetchPokemon()
{
try{
    const pokiName=document.getElementById("poki").value.toLowerCase();
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiName}`);
    if(!response.ok)
    {
        throw new Error("Pokemon not found")
    }
    else
    {
        const poki=await response.json();
        const pokemonimg= poki.sprites.front_default;
        img1.src=pokemonimg;
        img1.style.display="block";
    }
}
catch(error)
{
    window.alert(error);
}
}