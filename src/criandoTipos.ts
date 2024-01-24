let literal : "Hello,Word!!!" // Declarando o proprio tipo 
let pi: 3.14159 
//@ts-ignore
literal= "Hi, Word!!!" //Type '"Hi, Word!!!"' is not assignable to type '"Hello,Word!!!"'

let option : 'Yes' | 'No' // Posso ter esses valores como opções

type Planets =  'Mercurio' | "Venus" | "Terra" // Criando o nosso proprio tipo

let planet : Planets

if(planet === 'Terra'){
    console.log("Estamos na Terra")
}

function checkPlanet(planet:Planets){
    if(planet === 'Terra'){
        console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name : string) => void 

function greet(callbackfn:GreetingCallback){ // Declarando tipo de funcao
  let name = "magno"
  callbackfn(name)
}
