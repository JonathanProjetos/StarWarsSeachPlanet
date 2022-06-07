async function fetchApiStarWars() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(url);
  const data = await request.json();
  const filterResidents = data.results;
  return filterResidents;
}

export default fetchApiStarWars;
