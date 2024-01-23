let literal : "Hello,Word!!!" // Declarando o proprio tipo 
let pi: 3.14159 

literal= "Hi, Word!!!" //Type '"Hi, Word!!!"' is not assignable to type '"Hello,Word!!!"'

let option : 'Yes' | 'No' // Posso ter esses valores como opções

type Planet =  'Mercurio' | "Venus" | "Terra" // Criando o nosso proprio tipo

let planet : Planet

if(planet === 'Terra'){
    console.log("Estamos na Terra")
}

function checkPlanet(planet:Planet){
    if(planet === 'Terra'){
        console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name : string) => void 

function greet(callbackfn:GreetingCallback){ // Declarando tipo de funcao
  let name = "magno"
  callbackfn(name)
}
