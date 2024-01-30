class Spaceship { //Ts diferente do Js 
     private _name : string // Private Metodo ou propriedade que so pode ser acessa do pela propria classe
    protected  captain  : string // Protected  Metodo ou propriedade que so pode ser acessa do pela propria classe e subclasse
     protected speed : number
  
    get name(){ // Posso modificar usando o get mesmo o _name sendo private
        return this._name
    }
    set name(name){
        this._name
    }

    constructor(name : string, captain : string) {
      this.name = name
      this.captain = captain
      this.speed = 0
    }
  
    public accelerate(rate: number, time : number) { // Public Pode ser acessada fora da classe
      this.speed = rate * time
    }
  }
  
  class Fighter extends Spaceship {
    weapons
  
      // O atributo weapons existe mesmo sem um construtor
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
      this.name = '' // Erro porque esta sendo acessada fora da classe
      this.captain = ''
    }
  }
  
  let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  //@ts-ignore
  ship.speed = 50 // Erro porque esta sendo acessada fora da  classe ou subclasse
  ship.accelerate(50, 10)
  ship.name = 'Magno'