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
          episode: characterData.episode.length,
          location: characterData.location.name,
        };
      });
    });
}

const bringInfo = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.info.count,
        pages: data.info.pages,
        next: data.info.next,
        prev: data.info.prev,
      };
    });
};

const nextPages = (numPage) => {
  if (numPage !== null) {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${numPage}`)
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((characterData) => {
          return {
            image: characterData.image,
            id: characterData.id,
            name: characterData.name,
            species: characterData.species,
            status: characterData.status,
            origin: characterData.origin,
            episode: characterData.episode.length,
            location: characterData.location.name,
          };
        });
      });
  }
};

const CharactersApi = {
  getApi: getApi,
  bringInfo: bringInfo,
  nextPages: nextPages,
};

export default CharactersApi;
