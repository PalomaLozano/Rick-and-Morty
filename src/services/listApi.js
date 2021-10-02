/*const limit = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];*/

function getApi() {
  return fetch(
    `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`
  )
    .then((response) => response.json())
    .then((json) => {
      return json.map((characterData) => {
        return {
          image: characterData.image,
          id: characterData.id,
          name: characterData.name,
          species: characterData.species,
          status: characterData.status,
          origin: characterData.origin,
          episode: characterData.episode,
        };
      });
    });
}

const CharactersApi = {
  getApi: getApi,
};

export default CharactersApi;
