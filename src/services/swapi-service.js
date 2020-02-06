export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error (`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json();
  }

   getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._tranformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._tranformPerson(person);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._tranformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._tranformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId = (item) => {
    const idRegEx  = /\/([0-9]*)\/$/;
    return item.url.match(idRegEx)[1];;
  }

  _tranformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_perod,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      created: starship.created,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _tranformPerson = (person) => {
    return {
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birth_year: person.birth_year,
    eyeColor: person.eye_color
    }
  }
}
