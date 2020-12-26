
import Hash from '../utils/Hash';
import Date from '../utils/Date';

const Character = async () =>{

  const id = Hash();
  const character = await Date(id);
  const cont = `
  <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last Location: ${character.location.name}</h3>
      </article>
    </div>
  `;

  return cont
};

export default Character;