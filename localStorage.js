// Importa fetch para Node.js
import fetch from "node-fetch";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

// Obtener un consejo aleatorio de la API
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then(response => response.json())
    .then(json => {
        console.log(json); // Imprime la respuesta completa de la API para analizarla
        guardarLocalStorage(json); // Guarda directamente el JSON
    })
    .catch(error => console.error("Error:", error));


// Función para guardar el consejo en localStorage
const guardarLocalStorage = (data) => {
    localStorage.setItem("Quote", JSON.stringify(data));
};


// Función para obtener el consejo de localStorage
const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem("Quote") ? JSON.parse(localStorage.getItem("Quote")) : "No hay datos";
    console.log(respuesta);
};


// Función para eliminar el consejo de localStorage
const eliminarLocalStorage = () => {
    !localStorage.getItem("Quote") ? console.log("No hay clave") : localStorage.removeItem("Quote");
};


// Ejecuciones de ejemplo
obtenerLocalStorage("Quote"); // Para ver el dato almacenado
eliminarLocalStorage(); // Para eliminar el dato almacenado
