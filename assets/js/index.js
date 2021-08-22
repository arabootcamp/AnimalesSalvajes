import {
  loadImgAnimals,
  putImg,
  addAnimal  
} from './module/module-functions.js'

//MAIN
loadImgAnimals().then((arrayAnimals) => {
  //Colocar imagen en preview
  animal.addEventListener('change', function (event) {
    putImg(this.value, arrayAnimals);
  });
  //Añadir Animal
  btnRegistrar.addEventListener('click',
    function (event) {
      addAnimal(animal.value, arrayAnimals);
    });
});