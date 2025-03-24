import { defineConfig } from "vite";
import { resolve } from 'path'; // Importa resolve desde el módulo path

export default defineConfig({
  base: "./", // Usa rutas relativas en los enlaces generados en el HTML
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Página principal
        location: resolve(__dirname, 'location.html'), // Otras páginas
      },
    },
  }, 
});
