import { SpaceShip } from "./Modulos"; 

import * as _ from "lodash"

interface BattleSpaceship extends SpaceShip {
    weapons: number
}

let teste : BattleSpaceship = {

name : 'Nave',
pilot: 'Magno',
speed : 50,
weapons:4

}

console.log(_.camelCase(teste.pilot))



