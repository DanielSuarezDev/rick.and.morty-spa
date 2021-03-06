import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import Hash from '../utils/Hash';
import resolveRoutes from '../utils/resolveRoutes';

const urlRoute = {
  '/': Home,
  '/:id': Character,
};

const router = async () =>{
const header = null || document.getElementById('header');
const content = null || document.getElementById('content');
const footer = null || document.getElementById('footer');

header.innerHTML = await Header();

let hash = Hash();
let route = await resolveRoutes(hash);
let render = urlRoute[route] ? urlRoute[route]: Error404;
content.innerHTML = await render();
footer.innerHTML = await Footer();
};

export default router;