class Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonidos = sonidos;
    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    //this.getComentarios = () => _comentarios;
    this.setComentarios = (newComment) => _comentarios = newComment;
    this.getSonidos = () => _sonidos;
  }

  get nombre() {
    return this.getNombre();
  }
  get edad() {
    return this.getEdad();
  }
  get img() {
    return this.getImg();
  }
  set comentarios(text) {
    this.setComentarios(text);
  }
  get sonidos() {
    return this.getSonidos();
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  rugir() {
    console.log('hacer sonido');
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  aullar() {
    console.log('hacer sonido');
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  grunir() {
    console.log('hacer sonido');
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  sisear() {
    console.log('hacer sonido sssss');
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  chillar() {
    console.log('hacer sonido');
  }
}

export {
  Animal,
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila
};