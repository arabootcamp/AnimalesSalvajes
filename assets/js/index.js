import {
  loadImgAnimals,
  putImg,
  addAnimal,
  playSound
} from './module/module-functions.js'

//MAIN
//Observando cambios del DOM, se ejecuta IIFE ()();
var observeDOM = (function () {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    eventListenerSupported = window.addEventListener;

  return function (obj, callback) {
    if (MutationObserver) {
      // define a new observer
      var obs = new MutationObserver(function (mutations, observer) {
        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length)
          callback();
      });
      // have the observer observe foo for changes in children
      obs.observe(obj, {
        childList: true,
        subtree: true
      });
    } else if (eventListenerSupported) {
      obj.addEventListener('DOMNodeInserted', callback, false);
      obj.addEventListener('DOMNodeRemoved', callback, false);
    }
  }
})();


//Luego hacemos un fetch para traer las imagenes y cargarlas en un array
loadImgAnimals().then((arrayAnimalsJson) => {
  //Colocar imagen en preview
  animal.addEventListener('change', function (event) {
    putImg(this.value, arrayAnimalsJson);
  });
  //Añadir Animal
  let arrayAnimals = [];
  btnRegistrar.addEventListener('click',
    function (event) {
      let objAnimal = addAnimal(animal.value, arrayAnimalsJson, arrayAnimals.length);
      arrayAnimals.push(objAnimal);
    });

  // Observamos cambios en la tabla de animales
  observeDOM(document.getElementById('Animales'), function () {
    let clickImgsAnimals=document.querySelectorAll('.clickSounds')
    let maxIndex=clickImgsAnimals.length-1;
    clickImgsAnimals[maxIndex].addEventListener('click',function(event){
    let indexClick=event.currentTarget.id.split("-")[1];
    //Reproducir sonido del objeto clickeado
    playSound(arrayAnimals[indexClick]);
    }) 
  });
});