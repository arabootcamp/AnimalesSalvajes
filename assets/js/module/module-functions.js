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
  preview.innerHTML = `<img src="assets/imgs/${found.imagen}" alt="img animal">`;
}

let addAnimal = (value, array) => {
  if (!validateInputs())
    return;
  const index = array.findIndex(element => element.name == value);
  let expression = `new ${animal.value}(animal.value, edad.value, array[${index}].imagen,comentarios.value, array[${index}].sonido)`;
  let object = eval(expression);
  clearInputs();
}

export {
  loadImgAnimals,
  validateInputs,
  clearInputs,
  putImg,
  addAnimal  
};