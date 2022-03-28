const URL = "https://rickandmortyapi.com/api/character";

export default {
  getData: () => {
    return fetch(URL)
      .then((data) => data.json())
      .then((data) => data.results);
  },
};
