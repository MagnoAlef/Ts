//@ts-ignore
function Decorator() {
    return function (target, key, descriptor) {

        descriptor.value = function(value:number){
            console.log(`Calculando ${value} elevado ao quadrado `)
            return Math.pow(value,2)
        }
     
    }
  }



class Planetas {
    name: string
  
    constructor(name: string) {
      this.name = name
    }
    @Decorator()
    calculate(value: number) {
        // ...
        console.log(`Calculando ${value} vezes 2 `) // Ele calculou a parte de cima por causa do Decorator
      return value * 2
    }
  }

const planeta = new Planetas('Terra')

const result = planeta.calculate(5)

console.log(`Resultado: ${result}`)