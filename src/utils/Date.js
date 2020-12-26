const API = 'https://rickandmortyapi.com/api/character/';

const Date = async (id) => {
  const urlAPI = id ? `${API}${id}` : API;
  try{
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  }catch (error){
    console.log('fetch error', error);
  };
};

export default Date;
