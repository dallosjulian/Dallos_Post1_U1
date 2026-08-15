# Dallos_Post1_U1 — Laboratorio: Fundamentos del Entorno Web y Protocolo HTTP

**Autor:** Julian Dallos  
**Correo:** dallosjulian5@gmail.com  
**Curso:** Desarrollo Web — Unidad 1, Post-laboratorio 1  
**Fecha de entrega:** 2026-08-15

---

## Descripción del Proyecto

Este repositorio contiene el desarrollo completo del laboratorio de fundamentos del entorno web, dividido en dos partes. La **Parte 1** establece el entorno de desarrollo local y construye una página HTML estructurada con estilos CSS y comportamiento JavaScript básico. La **Parte 2** profundiza en el análisis del protocolo HTTP mediante el uso de herramientas como Chrome DevTools y Postman, documentando peticiones GET y POST a recursos reales e identificando las diferencias entre respuestas HTML y JSON.

---

## Parte 1: Configuración del Entorno

### Estructura de archivos

```
parte-1-entorno/
├── index.html          # Página principal con dos secciones de contenido
├── css/
│   └── styles.css      # Estilos base, reset universal y efecto hover
└── js/
    └── main.js         # Script DOMContentLoaded: hora, título y secciones
```

### Descripción de archivos

- **`index.html`**: Página HTML5 semántica con `<header>` (fondo `#065A82`), dos `<section>` (Evolución de la Web y Protocolo HTTP) y `<footer>`. Vincula el CSS y el JS correctamente.
- **`styles.css`**: Reseteo universal con `box-sizing: border-box`, fuente Arial, estilos para secciones con borde izquierdo `#1C7293` y fondo `#f9f9f9`, y efecto hover con transición de `0.3s ease`.
- **`main.js`**: Al cargar el DOM imprime en consola la hora actual, el título del documento y la cantidad de secciones `<section>` detectadas.

---

## Parte 2: Análisis del Protocolo HTTP

### Estructura de archivos

```
parte-2-analisis-http/
├── analisis/
│   ├── 01-pagina-html.md       # GET a example.com — Status 200 OK
│   ├── 02-api-rest-get.md      # GET a JSONPlaceholder — 200 OK y 404 Not Found
│   └── 03-postman-post.md      # POST a JSONPlaceholder — 201 Created
└── capturas/
    └── (evidencias de pantalla)
```

### Resumen de Peticiones HTTP Analizadas

| # | Herramienta   | Método | URL                                              | Status Code    | Content-Type                    |
|---|---------------|--------|--------------------------------------------------|----------------|---------------------------------|
| 1 | DevTools      | GET    | `https://example.com`                            | `200 OK`       | text/html; charset=UTF-8        |
| 2 | DevTools      | GET    | `https://jsonplaceholder.typicode.com/posts/1`   | `200 OK`       | application/json; charset=utf-8 |
| 3 | DevTools      | GET    | `https://jsonplaceholder.typicode.com/posts/999` | `404 Not Found`| application/json; charset=utf-8 |
| 4 | Postman v11   | POST   | `https://jsonplaceholder.typicode.com/posts`     | `201 Created`  | application/json; charset=utf-8 |

---

## Herramientas Utilizadas

| Herramienta         | Versión       | Uso                                              |
|---------------------|---------------|--------------------------------------------------|
| Git                 | 2.53.0        | Control de versiones y gestión de commits        |
| Visual Studio Code  | 1.132.0       | Editor de código principal                       |
| Google Chrome       | 126           | Navegador con DevTools para análisis de red      |
| Postman             | v11           | Cliente HTTP para pruebas de API y tests         |
| JSONPlaceholder     | —             | API REST pública de prueba                       |

---

## Conclusiones

El desarrollo de este laboratorio permitió consolidar los fundamentos del entorno web desde la configuración inicial del repositorio hasta el análisis detallado del protocolo HTTP. La Parte 1 demostró cómo una estructura HTML semántica, combinada con CSS bien organizado y JavaScript reactivo al DOM, conforma la base de cualquier aplicación web moderna. La Parte 2 evidenció que el protocolo HTTP es el lenguaje universal de comunicación en la web, donde los códigos de estado (`200`, `201`, `404`) no son simples números, sino contratos claros sobre el resultado de cada operación. El contraste entre respuestas `text/html` y `application/json` subrayó la separación actual entre la capa de presentación (frontend) y la capa de datos (API), arquitectura dominante en el desarrollo web contemporáneo. El uso de herramientas profesionales como Chrome DevTools y Postman demostró que la observabilidad de las peticiones HTTP es una habilidad crítica para diagnosticar problemas, optimizar rendimiento y garantizar la correcta integración entre sistemas. Este laboratorio establece una base sólida para el desarrollo de aplicaciones web más complejas en las siguientes unidades del curso.