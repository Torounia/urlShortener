# Description

A URL shortener API service using NodeJS and Mongo DB for persistant storage. All services are running on docker nodes build using docker compose.

## API endpoints

-- *shorten a URL*

**Request**
```
POST /api/v1/shortner
```
Body

```
{"longUrl": "https://veryverylongurl.com"}
```

**Response**
200
```
 "http:localhost:5000/M6-MVxJGP"
```
**Response** 401
```
Invalid longUrl
```

-- *lookup*

**Request**
```
GET /api/v1/lookup/shortUrlIdentifier

```
**Response**
200
```
 redirect to original URL
```
**Response** 404
```
No URL found
```


# How to run

All services are build to run using docker containers

*Assuming docker deamon is installed run*:

steps:

1) Copy repository
2) navigate to folder
3) run 
```
docker-compose up -d --build
```

4) Post a URL using Postman or test using vegeta to the localhost URL

**No API authentication has been considered but can be implemented based on the use case**
**Kubernetes Autoscaller or Horizontal Pod Scaling can be implemented to achieve specific service level argement objectives



