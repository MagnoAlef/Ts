const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satelites: []
    });
    alert(`O Planeta ${name} foi registrado com sucesso`);
}
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatelite(name, planet) {
    planet.satelites.push(name);
    alert(`O satelite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatelite(name, planet) {
    planet.satelites = planet.satelites.filter((satelite) => satelite !== name);
    alert(`O satelite ${name} foi removido do planeta ${planet.name}`);
}
