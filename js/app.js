function iniciarApp() {
    
    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria)

  obtenerCategorias();

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarCategorias(resultado.categories));
  }

  function mostrarCategorias(categorias = []){
    categorias.forEach(categoria =>{
        const {strCategory} = categoria;
        const option = document.createElement('OPTION');
        option.value = strCategory
        option.textContent = strCategory
        selectCategorias.appendChild(option);
        
    })
  }

  function seleccionarCategoria(e){
    //console.log(e.target.value);
    const categoria = e.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => mostrarRecetas(resultado.meals))
  }
  function mostrarRecetas(recetas = []){

  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
