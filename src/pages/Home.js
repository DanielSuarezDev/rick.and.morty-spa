import Date from '../utils/Date';

const Home = async () =>{
  const characters = await Date();
  
  const cont = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return cont;
};

export default Home;