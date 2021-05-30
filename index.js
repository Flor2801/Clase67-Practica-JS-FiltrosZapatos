    // while (orden.hasChildNodes()) orden.removeChild(orden.firstChild);


const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./img/taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./img/taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./img/bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./img/zapato-rojo.jpg",
  },
];

const form = document.forms[0];
const listado = document.getElementById("lista-de-productos");

mostrarEnHTML = (array) => {
  // listado.innerHTML = '';
  array.map((zapato) => {
    listado.innerHTML += `<div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}</div>
    </div>`;
  });
};

productos.forEach((zapato) => {
  listado.innerHTML += `
  <div class="contenedorProducto">
  <div class="foto"><img src="${zapato.img}"></div>
  <div class="titulo">${zapato.nombre}</div>
  </div>
  `;
});

form.onsubmit = (e) => {
  e.preventDefault();
  listado.innerHTML = "";

  const filtro = document.querySelector("#filtro");
  const selectorTipo = document.querySelector("#tipo");
  const selectorColor = document.querySelector("#color");

  /// INPUT DE TEXTO
  if (selectorColor.value === "" && selectorTipo.value === "" && filtro.value === "") {
    mostrarEnHTML(productos);
  }

  else if (filtro.value !== "" && selectorTipo.value !== "" && selectorColor.value !== "") {
    let inputFiltrado = productos.filter((zapato) => {
      return (
        (zapato.tipo === filtro.value || zapato.color === filtro.value) && zapato.color === selectorColor.value && zapato.tipo === selectorTipo.value
      );
    });
    mostrarEnHTML(inputFiltrado);
  } 

  else if (filtro.value !== "" && selectorTipo.value !== "") {
    let inputFiltrado = productos.filter((zapato) => {
      return (
        (zapato.tipo === filtro.value || zapato.color === filtro.value) && zapato.tipo === selectorTipo.value
      );
    });
    mostrarEnHTML(inputFiltrado);
  } 

  else if (filtro.value !== "" && selectorColor.value !== "") {
    let inputFiltrado = productos.filter((zapato) => {
      return (
        (zapato.tipo === filtro.value || zapato.color === filtro.value) && zapato.color === selectorColor.value
      );
    });
    mostrarEnHTML(inputFiltrado);
  }
  
  else if (filtro.value !== "") {
    let textoFiltrado = productos.filter((zapato) => {
      return zapato.color === filtro.value || zapato.tipo === filtro.value;
    });
    mostrarEnHTML(textoFiltrado);
  }

  

  //// SELECTOR DE TIPO Y COLOR

  else if (selectorTipo.value !== "" && selectorColor.value !== "") {
    let todoFiltrado = productos.filter((zapato) => {
      return ( zapato.color === selectorColor.value && zapato.tipo === selectorTipo.value
      );
    });
    mostrarEnHTML(todoFiltrado);
  }

  else if (selectorTipo.value !== "" && selectorColor.value === "") {
    const tipoFiltrado = productos.filter((zapato) => {
      return zapato.tipo === selectorTipo.value;
    });
    mostrarEnHTML(tipoFiltrado);
  }

  else if (selectorTipo.value === "" && selectorColor.value !== "") {
    const colorFiltrado = productos.filter((zapato) => {
      return zapato.color === selectorColor.value;
    });
    mostrarEnHTML(colorFiltrado);
  }
};
