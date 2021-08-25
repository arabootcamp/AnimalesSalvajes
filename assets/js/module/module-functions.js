import {
  Animal,
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila
} from './module-class.js';

let loadImgAnimals = async () => {
  try {
    let response = await fetch('animales.json');
    let data = await response.json();
    return data.animales; // arreglo de animales
  } catch (err) {
    console.log(err)
  }
}

let validateInputs = () => {
  if (animal.value == 'Seleccione un animal' || edad.value == 'Seleccione un rango de años' || comentarios.value == "") {
    alert('Debe completar todos los campos');
    return false;
  } else
    return true;
}

let clearInputs = () => {
  animal.value = 'Seleccione un animal';
  edad.value = 'Seleccione un rango de años';
  comentarios.value = "";
  preview.innerHTML = '';
}

let putImg = (value, array) => {
  if (value == 'Seleccione un animal')
    return;
  const found = array.find(element => element.name == value);
  preview.innerHTML = `<img class="imgs imgs--preview" src="assets/imgs/${found.imagen}" alt="img animal">`;
}

let addAnimal = (nameAnimal, arrayJson, idTag) => {
    if (!validateInputs())
      return;
    const indexAnimalSelected = arrayJson.findIndex(element => element.name == nameAnimal);
    let objAnimal;
    switch (nameAnimal) {
      case "Leon":
        objAnimal = new Leon(nameAnimal, edad.value, arrayJson[indexAnimalSelected].imagen, comentarios.value, arrayJson[indexAnimalSelected].sonido);
        break;
      case "Lobo":
        objAnimal = new Lobo(nameAnimal, edad.value, arrayJson[indexAnimalSelected].imagen, comentarios.value, arrayJson[indexAnimalSelected].sonido);
        break;
      case "Oso":
        objAnimal = new Oso(nameAnimal, edad.value, arrayJson[indexAnimalSelected].imagen, comentarios.value, arrayJson[indexAnimalSelected].sonido);
        break;
      case "Serpiente":
        objAnimal = new Serpiente(nameAnimal, edad.value, arrayJson[indexAnimalSelected].imagen, comentarios.value, arrayJson[indexAnimalSelected].sonido);
        break;
      case "Aguila":
        objAnimal = new Aguila(nameAnimal, edad.value, arrayJson[indexAnimalSelected].imagen, comentarios.value, arrayJson[indexAnimalSelected].sonido);
        break;
    }
    /*
      let expression = `new ${animal.value}(animal.value, edad.value, arrayJson[${index}].imagen,comentarios.value, arrayJson[${index}].sonido)`;
      let object = eval(expression);
     */
    let animalInTable = document.createElement('div');
    let text = `<div class="border mx-3"><div class="box-img"><img id="imgAnimal-${idTag}" class="clickImgsAnimals imgs imgs--table" src="./assets/imgs/${objAnimal.img}" alt="img animal"></div><button id="btnSound-${idTag}" class="clickSounds d-block w-100 bg-secondary text-light py-2 container-fa"><i class="fas fa-volume-up fa-2x"></i></button></div>`;
    animalInTable.innerHTML = text;
    Animales.appendChild(animalInTable);
    clearInputs();
    return objAnimal;
}

let playSound = obj => {
  switch (obj.nombre) {
    case "Leon":
      obj.rugir();
      break;
    case "Lobo":
      obj.aullar();
      break;
    case "Oso":
      obj.grunir();
      break;
    case "Serpiente":
      obj.sisear();
      break;
    case "Aguila":
      obj.chillar();
      break;
  }
}

export {
  loadImgAnimals,
  validateInputs,
  clearInputs,
  putImg,
  addAnimal,
  playSound
};