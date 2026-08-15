# Análisis 1: Petición GET a una Página HTML

**Herramienta utilizada:** Google Chrome DevTools — pestaña Network  
**URL analizada:** `https://example.com`  
**Método HTTP:** `GET`  
**Fecha del análisis:** 2026-08-15

---

## 1. Datos de la Petición (Request)

| Campo            | Valor                                                                 |
|------------------|-----------------------------------------------------------------------|
| **Método**       | GET                                                                   |
| **URL**          | https://example.com                                                   |
| **Protocolo**    | HTTP/2                                                                |
| **Status Code**  | `200 OK`                                                              |

### Headers de Request

| Header             | Valor                                                                 |
|--------------------|-----------------------------------------------------------------------|
| `Host`             | example.com                                                           |
| `User-Agent`       | Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0 Safari/537.36 |
| `Accept`           | text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8      |
| `Accept-Language`  | es-CO,es;q=0.9,en;q=0.8                                               |
| `Accept-Encoding`  | gzip, deflate, br                                                     |
| `Connection`       | keep-alive                                                            |
| `Cache-Control`    | max-age=0                                                             |

---

## 2. Datos de la Respuesta (Response)

### Headers de Response

| Header              | Valor                                    |
|---------------------|------------------------------------------|
| `Content-Type`      | text/html; charset=UTF-8                 |
| `Content-Length`    | 1256                                     |
| `Cache-Control`     | max-age=604800                           |
| `ETag`              | "3147526947"                             |
| `Expires`           | Sat, 22 Aug 2026 20:47:31 GMT            |
| `Last-Modified`     | Thu, 17 Oct 2019 07:18:26 GMT            |
| `Server`            | ECS (iad/182A)                           |
| `X-Cache`           | HIT                                      |
| `Vary`              | Accept-Encoding                          |

### Cuerpo de la Respuesta (fragmento)

```html
<!doctype html>
<html>
<head>
    <title>Example Domain</title>
    <meta charset="utf-8" />
</head>
<body>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents.</p>
</body>
</html>
```

---

## 3. Tiempos de Carga (Timing)

| Fase              | Tiempo      |
|-------------------|-------------|
| DNS Lookup        | 12 ms       |
| TCP Handshake     | 38 ms       |
| TLS Negotiation   | 54 ms       |
| Request Sent      | 1 ms        |
| Waiting (TTFB)    | 97 ms       |
| Content Download  | 3 ms        |
| **Total**         | **205 ms**  |

---

## 4. Conclusión

La petición GET a `https://example.com` devolvió un `200 OK` en aproximadamente 205 ms, lo que indica una respuesta rápida y eficiente desde los servidores de la IANA. El encabezado `Content-Type: text/html; charset=UTF-8` confirma que el servidor entregó un documento HTML estático, el tipo de recurso esperado para una página web tradicional. El valor `X-Cache: HIT` revela que la respuesta fue servida desde una caché intermedia (CDN), lo que explica la baja latencia. El encabezado `Cache-Control: max-age=604800` indica que el navegador puede almacenar esta respuesta localmente durante siete días sin necesidad de consultarla nuevamente al servidor. Este comportamiento es óptimo para recursos estáticos que no cambian con frecuencia, minimizando el consumo de ancho de banda y mejorando la experiencia del usuario.
