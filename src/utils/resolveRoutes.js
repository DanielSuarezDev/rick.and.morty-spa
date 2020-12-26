const resolveRoutes = (route) => {
  if(route.length <= 3){
    let validator = route === '/' ? route: '/:id';
    return validator;
  }

  return `/${route}`;
};

export default resolveRoutes;