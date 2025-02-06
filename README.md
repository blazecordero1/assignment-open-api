# Assignment: Open-Meteo API Integration

## Objective
This project demonstrates integration of the Open-Meteo API into a NestJS backend. The backend fetches weather data based on latitude and longitude.

## Features
- Fetch real-time weather data from Open-Meteo.
- Structured NestJS service and controller.
- REST API endpoints for fetching weather forecasts.

## Technologies Used
- **NestJS** (Backend framework)
- **Axios** (HTTP client)
- **TypeScript** (Strongly-typed JavaScript)
- **Postman** (API testing)

---

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/blazecordero1/assignment-open-api.git
   cd assignment-open-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm run start
   ```

---

## API Documentation
### Base URL
```
http://localhost:3000/
```

### Endpoints
#### **Get Weather Data**
Fetch hourly temperature data for a given location.

- **Endpoint:** `/weather`
- **Method:** `GET`
- **Query Parameters:**
  - `lat` (number) - Latitude
  - `lon` (number) - Longitude
- **Example Request:**
- PH GEO LOC
  ```sh
  curl "http://localhost:3000/weather?lat=14.5995&lon=120.9842"
  ```
- **Example Response:**
  ```json
  {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "hourly": {
      "temperature_2m": [
        12.3, 13.5, 15.0, 14.8
      ]
    }
  }
  ```


---

## Testing
Use Postman or cURL to test API endpoints.

Example Postman Request:
```
GET http://localhost:3000/weather?lat=14.5995&lon=120.9842

```


