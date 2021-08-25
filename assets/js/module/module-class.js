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
    this.getComentarios = () => _comentarios;
    //this.setComentarios = (newComment) => _comentarios = newComment;
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
  get comentarios() {
    return this.getComentarios();
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
    let audio = document.getElementById('player');
    audio.setAttribute('src', `./assets/sounds/${this.sonidos}`);
    audio.play();
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  aullar() {
    let audio = document.getElementById('player');
    audio.setAttribute('src', `./assets/sounds/${this.sonidos}`);
    audio.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  grunir() {
    let audio = document.getElementById('player');
    audio.setAttribute('src', `./assets/sounds/${this.sonidos}`);
    audio.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  sisear() {
    let audio = document.getElementById('player');
    audio.setAttribute('src', `./assets/sounds/${this.sonidos}`);
    audio.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonidos) {
    super(nombre, edad, img, comentarios, sonidos)
  }
  chillar() {
    let audio = document.getElementById('player');
    audio.setAttribute('src', `./assets/sounds/${this.sonidos}`);
    audio.play();
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