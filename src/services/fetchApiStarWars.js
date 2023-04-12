const fetchApiStarWars = async () => {
  const url = 'https://swapi.dev/api/planets';
  const request = await fetch(url);
  const results = await request.json();
  const resultApi = await results.results;
  return resultApi;
};

export default fetchApiStarWars;
