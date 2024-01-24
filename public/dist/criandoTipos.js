let literal; // Declarando o proprio tipo 
let pi;
//@ts-ignore
literal = "Hi, Word!!!"; //Type '"Hi, Word!!!"' is not assignable to type '"Hello,Word!!!"'
let option; // Posso ter esses valores como opções
let planet;
if (planet === 'Terra') {
    console.log("Estamos na Terra");
}
function checkPlanet(planet) {
    if (planet === 'Terra') {
        console.log("Estamos na Terra");
    }
}
function greet(callbackfn) {
    let name = "magno";
    callbackfn(name);
}
