# Análisis 2: Peticiones GET a una API REST

**Herramienta utilizada:** Google Chrome DevTools — pestaña Network  
**API analizada:** JSONPlaceholder (`https://jsonplaceholder.typicode.com`)  
**Método HTTP:** `GET`  
**Fecha del análisis:** 2026-08-15

---

## Petición A: Recurso Existente — `/posts/1`

**URL completa:** `https://jsonplaceholder.typicode.com/posts/1`

### Headers de Request

| Header             | Valor                                                                 |
|--------------------|-----------------------------------------------------------------------|
| `Host`             | jsonplaceholder.typicode.com                                          |
| `User-Agent`       | Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0 Safari/537.36 |
| `Accept`           | application/json, text/plain, */*                                     |
| `Accept-Language`  | es-CO,es;q=0.9,en;q=0.8                                               |
| `Accept-Encoding`  | gzip, deflate, br                                                     |
| `Connection`       | keep-alive                                                            |
| `Origin`           | null                                                                  |

### Datos de la Respuesta

| Campo           | Valor                             |
|-----------------|-----------------------------------|
| **Status Code** | `200 OK`                          |
| **Protocolo**   | HTTP/1.1                          |
| `Content-Type`  | application/json; charset=utf-8   |
| `Content-Length`| 292                               |
| `Cache-Control` | max-age=43200                     |
| `X-Content-Type-Options` | nosniff                |
| `Access-Control-Allow-Origin` | *                 |

### Cuerpo de la Respuesta (JSON)

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### Tiempos de Carga

| Fase              | Tiempo     |
|-------------------|------------|
| DNS Lookup        | 8 ms       |
| TCP Handshake     | 42 ms      |
| Waiting (TTFB)    | 183 ms     |
| Content Download  | 2 ms       |
| **Total**         | **235 ms** |

---

## Petición B: Recurso Inexistente — `/posts/999`

**URL completa:** `https://jsonplaceholder.typicode.com/posts/999`

### Datos de la Respuesta

| Campo           | Valor                             |
|-----------------|-----------------------------------|
| **Status Code** | `404 Not Found`                   |
| **Protocolo**   | HTTP/1.1                          |
| `Content-Type`  | application/json; charset=utf-8   |
| `Content-Length`| 2                                 |

### Cuerpo de la Respuesta (JSON)

```json
{}
```

> La API devuelve un objeto vacío `{}` con status `404` para indicar que el recurso solicitado no existe en el servidor.

### Tiempos de Carga

| Fase              | Tiempo     |
|-------------------|------------|
| DNS Lookup        | 0 ms       |
| TCP Handshake     | 0 ms       |
| Waiting (TTFB)    | 176 ms     |
| Content Download  | 1 ms       |
| **Total**         | **177 ms** |

---

## Comparación: HTML estático vs. API REST (JSON)

| Característica        | Página HTML (`example.com`)              | API REST (`jsonplaceholder`)               |
|-----------------------|------------------------------------------|--------------------------------------------|
| **Content-Type**      | `text/html; charset=UTF-8`               | `application/json; charset=utf-8`          |
| **Propósito**         | Presentar contenido visual al usuario    | Intercambiar datos estructurados entre sistemas |
| **Consumidor**        | Navegador web (renderiza HTML)           | Aplicación cliente (procesa JSON)          |
| **Formato de cuerpo** | Etiquetas HTML con estructura visual     | Objeto/array JSON puro                     |
| **Status en éxito**   | `200 OK`                                 | `200 OK`                                   |
| **Status en fallo**   | Página de error HTML                     | `404 Not Found` con cuerpo JSON            |
| **Cache-Control**     | `max-age=604800` (7 días)                | `max-age=43200` (12 horas)                 |
| **CORS**              | No aplica                                | `Access-Control-Allow-Origin: *`           |

---

## Conclusión

Las peticiones GET a una API REST como JSONPlaceholder difieren fundamentalmente de las peticiones a páginas HTML en cuanto al propósito y formato de los datos intercambiados. Mientras que una respuesta HTML está diseñada para ser renderizada visualmente por un navegador, una respuesta JSON transporta datos estructurados que cualquier cliente puede procesar independientemente de la plataforma. El código de estado `200 OK` indica éxito en ambos tipos de recurso, pero la naturaleza del cuerpo de respuesta es radicalmente diferente. La respuesta `404 Not Found` con cuerpo `{}` en la API REST demuestra una práctica común en el diseño de APIs: aunque el recurso no existe, el servidor sigue respondiendo con un formato JSON consistente para facilitar el manejo de errores en el cliente. La presencia del encabezado `Access-Control-Allow-Origin: *` en la API confirma que está diseñada para ser consumida de forma transversal desde cualquier dominio, característica esencial para arquitecturas desacopladas.
