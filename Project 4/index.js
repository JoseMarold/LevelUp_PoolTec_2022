

function main(){
    for (i = 0; i < 6; i++){
        minValue = 0;
        maxValue = 900;
        random = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        GetPokemon(random, i + 1);
    }
}



function GetPokemon(id, index){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) =>{
        document.getElementById("poke" + index).innerHTML = data.name;
        document.getElementById("imgPoke" + index).src = data.sprites.other["official-artwork"].front_default;
    })
    .catch((err) => {
        alert(err);
    })
}


main();


