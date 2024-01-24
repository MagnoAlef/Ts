type PlanetSituation = "habitado" | "habitavel"| "inavitavel" | "Inexplorado" 

type PlanetCoordinates = [number, number,number,number]

type Planet = {
    name:string,
    coordinates : PlanetCoordinates,
    situation : PlanetSituation,
    satelites : string[]
}

const planets : Planet[] = []

function addPlanet (name : string , coordinates : PlanetCoordinates , situation : PlanetSituation){
    planets.push({
        name,
        coordinates,
        situation,
        satelites:[]
    })
    alert(`O Planeta ${name} foi registrado com sucesso`)
}

function findPlanet(name:string){
    const planet = planets.find((planet) => planet.name === name)

    return planet ?? false
}

function updateSituation(situation : PlanetSituation ,planet : Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`)

}

function addSatelite(name:string , planet:Planet){
    planet.satelites.push(name)

    alert(`O satelite ${name} foi adicionado ao planeta ${planet.name}`)
}

function removeSatelite(name:string , planet:Planet){
    planet.satelites = planet.satelites.filter((satelite) => satelite !==name)
    
    alert(`O satelite ${name} foi removido do planeta ${planet.name}`)
}