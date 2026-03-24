// Detectar idioma del dispositivo
const lang = navigator.language.startsWith("es") ? "es" : "en";

// Textos bilingües
const textos = {
  es: {
    descripcion: "Especialista en restauración de techos y más... Calhoun, GA y alrededores."
  },
  en: {
    descripcion: "Roof restoration specialist and more… Calhoun, GA and surrounding areas"
  }
};

// Insertar texto según idioma
document.getElementById("descripcion").textContent = textos[lang].descripcion;
