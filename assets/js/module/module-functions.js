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
    modalAlert('Debe completar todos los campos');
    return false;
  } else
    return true;
}

let modalAlert = (text) => {
  $('#alertModal').modal('show');
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
  let text = `<div class="border mx-3"><div class="box-img"><img id="imgAnimal-${idTag}" class="clickImgsAnimals imgs imgs--table" src="./assets/imgs/${objAnimal.img}" alt="img animal" data-toggle="modal" data-target="#exampleModal"></div><button id="btnSound-${idTag}" class="clickSounds text-light py-2 container-fa"><i class="fas fa-volume-up fa-2x"></i></button></div>`;
  animalInTable.innerHTML = text;
  Animales.appendChild(animalInTable);
  clearInputs();
  return objAnimal;
}

let modalAnimal = (objAnimal) => {
  let modalBody = document.getElementsByClassName('modal-body');
  modalBody[0].innerHTML = `<div><div><img class="imgs" src="./assets/imgs/${objAnimal.img}" alt="img ${objAnimal.nombre}"></div><div class="mt-3 text-light text-center"><p>${objAnimal.edad}</p><h4 class="fw-bold">Comentarios</h4><p class="break-word">${objAnimal.comentarios}</p></div></div>`;
  exampleModal.className = "modal fade show";
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
  modalAlert,
  validateInputs,
  clearInputs,
  putImg,
  addAnimal,
  modalAnimal,
  playSound
};