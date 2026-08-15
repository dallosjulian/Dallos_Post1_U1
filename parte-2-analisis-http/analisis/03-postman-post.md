# Análisis 3: Petición POST con Postman

**Herramienta utilizada:** Postman v11  
**API analizada:** JSONPlaceholder (`https://jsonplaceholder.typicode.com`)  
**Método HTTP:** `POST`  
**Endpoint:** `/posts`  
**Fecha del análisis:** 2026-08-15

---

## 1. Configuración de la Petición en Postman

### Request

| Campo        | Valor                                         |
|--------------|-----------------------------------------------|
| **Método**   | POST                                          |
| **URL**      | https://jsonplaceholder.typicode.com/posts    |
| **Body**     | raw — JSON                                    |

### Headers de Request enviados

| Header           | Valor                            |
|------------------|----------------------------------|
| `Content-Type`   | application/json                 |
| `Accept`         | */*                              |
| `User-Agent`     | PostmanRuntime/7.43.0            |
| `Connection`     | keep-alive                       |
| `Content-Length` | 91                               |

### Cuerpo del Request (JSON enviado)

```json
{
  "title": "Laboratorio HTTP - Parte 2",
  "body": "Análisis de peticiones HTTP usando DevTools y Postman.",
  "userId": 1
}
```

---

## 2. Datos de la Respuesta (Response)

| Campo            | Valor                           |
|------------------|---------------------------------|
| **Status Code**  | `201 Created`                   |
| **Protocolo**    | HTTP/1.1                        |
| `Content-Type`   | application/json; charset=utf-8 |
| `Location`       | https://jsonplaceholder.typicode.com/posts/101 |
| `X-Powered-By`   | Express                         |
| `Access-Control-Allow-Origin` | *             |

### Cuerpo de la Respuesta (JSON recibido)

```json
{
  "title": "Laboratorio HTTP - Parte 2",
  "body": "Análisis de peticiones HTTP usando DevTools y Postman.",
  "userId": 1,
  "id": 101
}
```

> JSONPlaceholder asigna automáticamente el `id: 101` al nuevo recurso creado, simulando el comportamiento de una base de datos real.

---

## 3. Tests Automatizados en Postman

Los siguientes tests fueron escritos en la pestaña **Tests** de Postman y se ejecutaron en verde (✅ PASS):

```javascript
// Test 1: Verificar código de estado 201 Created
pm.test("Status code is 201 Created", function () {
    pm.response.to.have.status(201);
});

// Test 2: Verificar que la respuesta es JSON
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

// Test 3: Verificar que el ID fue asignado por el servidor
pm.test("Response body contains id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData.id).to.be.a("number");
});

// Test 4: Verificar que el título coincide con el enviado
pm.test("Title matches request", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.title).to.eql("Laboratorio HTTP - Parte 2");
});
```

### Resultados de los Tests

| Test                              | Estado   |
|-----------------------------------|----------|
| Status code is 201 Created        | ✅ PASS  |
| Response is JSON                  | ✅ PASS  |
| Response body contains id         | ✅ PASS  |
| Title matches request             | ✅ PASS  |

---

## 4. Diferencias entre GET y POST

| Característica       | GET                                      | POST                                        |
|----------------------|------------------------------------------|---------------------------------------------|
| **Propósito**        | Recuperar un recurso existente           | Crear un nuevo recurso en el servidor       |
| **Cuerpo (Body)**    | No lleva cuerpo                          | Lleva datos en formato JSON                 |
| **Status de éxito**  | `200 OK`                                 | `201 Created`                               |
| **Idempotente**      | Sí (repetir no tiene efecto secundario)  | No (cada llamada puede crear un nuevo registro) |
| **Visible en URL**   | Parámetros visibles en la URL            | Datos en el cuerpo, no en la URL            |
| **Cache**            | Puede cachearse                          | No se cachea                                |

---

## 5. Conclusión

El método POST a `https://jsonplaceholder.typicode.com/posts` retornó un `201 Created`, el código de estado correcto para la creación exitosa de un recurso según el estándar HTTP. El encabezado `Location` en la respuesta indica la URI del recurso recién creado, práctica recomendada en el diseño RESTful. Los cuatro tests automatizados en Postman pasaron satisfactoriamente, confirmando que la respuesta cumple con el contrato de la API: el cuerpo es JSON válido, contiene el `id` asignado por el servidor y refleja fielmente los datos enviados en el request. Esta capacidad de automatizar validaciones dentro de Postman es especialmente valiosa en flujos de integración continua donde se requiere verificar la integridad de los endpoints de forma repetible. La diferencia fundamental entre GET y POST radica en su semántica: mientras GET es idempotente y solo recupera información, POST tiene efectos secundarios sobre el estado del servidor al crear nuevos recursos.
