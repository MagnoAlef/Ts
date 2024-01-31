// function Decorator() {
//     return function (target, key, descriptor) {

//         descriptor.value = function(value:number){
//             console.log(`Calculando ${value} elevado ao quadrado `)
//             return Math.pow(value,2)
//         }
     
//     }
//   }

function log(){
    return function(target,key,descriptor){
        const originalMethod = descriptor.value // descriptor.value onde esta o nosso  metodo

        descriptor.value = function(...args:any[]){
            console.log("------------------------------")
            console.log(`Chamando o metodo ${key} com os parametros : ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this,args)

            console.log(`Chamando o metodo ${key} com os parametros : ${JSON.stringify(args)}`)
            console.log("------------------------------")
            
            return result
        }
    }
}
class Planetas {
    name: string
  
    constructor(name: string) {
      this.name = name
    }
    // @Decorator()
    @log()
    calculate(value: number) {
        // ...
        console.log(`Calculando ${value} vezes 2 `) // Ele calculou a parte de cima por causa do Decorator
      return value * 2
    }
    @log()
    invertName(){
        return this.name.split('').reverse().join('')
    }
  }

const planeta = new Planetas('Terra')

const result = planeta.calculate(5)

console.log(`Resultado: ${result}`)

planeta.invertName()

//Parte 2 Decorator

