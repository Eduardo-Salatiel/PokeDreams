
export function randomPokemons(){
    const arrPokemons = [];
    let randomNumber = 0;

    for (let i = 0; i < 15; i++) {
        randomNumber = Math.round(Math.random() * 898);
        arrPokemons.push(randomNumber);
    }

    return arrPokemons
}