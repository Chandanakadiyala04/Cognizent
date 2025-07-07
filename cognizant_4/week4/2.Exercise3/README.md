# Spring Boot Country Web Service

A RESTful web service built using Spring Boot that returns country information like India and others using XML-based configuration.
## Endpoints
### `GET /country`
Returns details of India.
**Sample Response:**
```json
{
  "code": "IN",
  "name": "India"
}
```

---
### `GET /countries`
Returns a list of all configured countries.
**Sample Response:**
```json
[
  { "code": "IN", "name": "India" },
  { "code": "US", "name": "United States" },
  { "code": "JP", "name": "Japan" },
  { "code": "FR", "name": "France" }
]
```

---
##  SME Explanation

###  What happens in the controller method?

- The method is mapped using `@RequestMapping`.
- It uses `ClassPathXmlApplicationContext` to load Spring XML config.
- Retrieves the `Country` bean with ID `"in"` (India).
- Returns the bean; Spring Boot uses Jackson to serialize it as JSON.

---

###  How is the Java Bean converted into JSON?

- Spring Boot uses **Jackson** under the hood.
- It automatically converts Java POJOs into JSON via public getters.
- You don’t need any manual serialization.

---

###  Viewing HTTP Headers in Browser (Developer Tools)

1. Press `F12` in Chrome/Edge/Firefox
2. Go to **Network** tab
3. Visit `http://localhost:8083/country`
4. Click on the request → View **Headers**

#### Sample Response Headers:
```
Content-Type: application/json
Content-Length: 33
Date: [timestamp]
```

---
###  Viewing Headers in Postman

1. Open Postman
2. Send a `GET` request to `http://localhost:8083/country`
3. Click on the **Headers** tab

#### Sample Headers:
| Header Name      | Value                 |
|------------------|------------------------|
| Content-Type     | application/json       |
| Host             | localhost:8083         |
| User-Agent       | PostmanRuntime/x.x.x   |

---

## ▶ How to Run

```cmd
mvn clean install
mvn spring-boot:run
```
Runs on: [http://localhost:8083](http://localhost:8083)
---